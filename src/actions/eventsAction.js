import { 
    SET_EVENTS, 
    SET_PAGENO,
    SET_ERROR,
    SET_HASMORE
} from './types'


export const setEventsData = ({events, pageNo, hasMore, error, history}) => dispatch => {
    
    console.log('error', error, events)
    if(!error) {
         // Set Events 
         dispatch(setEvents(events))
         // Set Page No
         dispatch(setPageNo(pageNo))
         dispatch(setHasMore(hasMore))
         history.push('/events')
       
    } else {
        dispatch(setError(error))
        history.push('/error')  
    }
   
    
}

export const setEvents = (events) => {

    return {
        type:SET_EVENTS,
        payload:[...events]
    }
}

export const setPageNo = (pageNo) => {
    
    return {
        type:SET_PAGENO,
        payload:pageNo
    }
}

export const setHasMore = (hasMore) => {
    return {
        type:SET_HASMORE,
        payload:hasMore
    }
}

export const setError = (error) => {
    return {
        type:SET_HASMORE,
        payload:error
    }
}

