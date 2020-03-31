import React from 'react'
import {connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from './Header'
import EventItem from './EventItem'
import { fetchMoreEvents} from '../utils/utils'

const EventsDashboard = (props) => {

    let {events, pageNo} = props

   
    return (
        <div className='content-container'>
        <Header />

        {events && events.length > 0 && events.map((event, index) => {

          return (
               <EventItem key={event.id} event={event} />
           )
           
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

export default connect(mapStateToProps, null)(EventsDashboard)