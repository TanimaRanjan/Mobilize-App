import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import Header from './Header'
import EventMap from './EventMap'


const EventDetailPage = (props) => {

    const handleClick = () => {
        props.history.push('/events')
    }


    const getLocation = (location) => {

        let address = ''
        if(location) {
            let venue = location.venue ? location.venue + ' ' : ''
            let addressLine = location.address_lines ? 
            location.address_lines.map(address_line => address_line).join(' ')
            : ''
            let locality = location.locality + ' ' || ''
            let region =  location.region + ' '|| ''
            let country = location.country + ' '|| ''
            let postalCode = location.postalCode+ ' ' || ''
             address = venue + addressLine + locality + region + country + postalCode
        } else { 
            address='Location unknown'
        }
        
        return address
    }

    const event = props.event
    return (
        <React.Fragment>
        <Header />
        <div className='content-container'>
            <button type="button" onClick={handleClick}>Back</button>  
            <div className='event__item' >
            <h1 className='event__title'>{event.title} </h1>
            <h2 className='event__type'>{event.event_type}</h2>
            <h2>{event.category}</h2>

            <img 
                className='event__image-l' 
                width='100px' height='100px' 
                alt={event.title}
                src={event.featured_image_url} 
                onError={(ev) => {ev.target.src ='/images/error.png'}}
            />

            <p className='event__location'>{getLocation(event.location)}</p>

            <p className='event__desc'>{event.description}</p>
            <p className='event_summary'>{event.summary}</p> 
            {event.timeslots.length > 0 && 
                event.timeslots.map((timeslot) => (
                    <p className='event_starttime' key={timeslot.id}>
                    { moment.unix(timeslot.start_date)
                     .format('ddd, MMM Do, YYYY h:mm A')}-
                     { moment.unix(timeslot.end_date)
                        .format('h:mm A')}
                     </p>
                ))
            }

            {event.location && event.location.location && 
                <EventMap location={event.location.location}/>
            }
           </div>
        </div>
        </React.Fragment>
        )
}

const mapStateToProps = (state, props) => ({
    event:state.events.data.find((event) => {
        return event.id == props.match.params.id
    })
})

export default connect(mapStateToProps)(EventDetailPage)