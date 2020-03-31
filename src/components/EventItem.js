import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const EventItem = ({event}) => {

    return (
        <Link className='event' to={`/event/${event.id}`}>
            <div className='event__item'>
            <h2 className='event__title'>{event.title}</h2>
            <p className='event__type sub'>{event.event_type}</p>
            <p className='event__time sub'>{event.timeslots.length > 0  
                &&  moment.unix(event.timeslots[0].start_date).format('dddd, MMMM Do, YYYY h:mm:ss A')}</p>
            
                { /* event.location ? <p> {event.location.venue}</p> : 
            <p>Location Unknown</p> */}
            <button className='event__cta'>See details</button>
            </div>
              <img 
             className='event__image' 
             width='100px' height='100px' 
             alt={event.title}
             src={event.featured_image_url} 
             onError={(ev) => {ev.target.src ='/images/error.png'}}
             />
           
             
        </Link>
    )
}

export default EventItem