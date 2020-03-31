import React , { useRef, useCallback } from 'react'
import {connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from './Header'
import EventItem from './EventItem'
import { setEventsData } from '../actions/eventsAction'
import { fetchMoreEvents } from '../utils/utils'

const EventsDashboard = (props) => {

    let {events, pageNo} = props

    const observer = useRef() 

    const lastEventElement = useCallback(node => {

      if(observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {

       // if(entries[0].isIntersecting && hasMore) {
        if(entries[0].isIntersecting) {
        pageNo = pageNo+ 1
        fetchMoreEvents(pageNo , props.setEventsData, props.history)
        }
    })
    if(node) observer.current.observe(node)

  }, [])


    // Sorting the events before display. 
    events.sort((a,b) => {
       return a.timeslots[0].start_date - b.timeslots[0].start_date
    })

    //console.log(sortedEvents)
   
    return (
        <div className='content-container'>
        <Header />

        {events && events.length > 0 && events.map((event, index) => {

            // When it reaches the end of the list 
            if(events.length === index+1) {
                return (
                    <div ref={lastEventElement} key={event.id} >
                    <EventItem event={event} />
                    </div>
                )

            } else {
                return (
                    <div key={event.id} >
                    <EventItem event={event} />
                    </div>
                )
            }
            
        })}


        {events && events.length === 0 && (
            <Link to ='/'><p>No Data Loaded. Click to refresh</p></Link>
        )}
        </div>
    )
}

const mapStateToProps = ({events}) => ({
    events:events.data,
    pageNo:events.pageNo
})

export default connect(mapStateToProps, {setEventsData})(EventsDashboard)