import { 
    SET_EVENTS, 
    SET_PAGENO,
    SET_ERROR
} from './types'


export const setEventsData = (events, pageNo, history) => dispatch => {
    
    // Set Events 
    dispatch(setEvents(events))
    // Set Page No
    dispatch(setPageNo(pageNo))
    history.push('/events')
    
}

export const setEvents = (events) => {

    // console.log('ACTION ', events)
    // const actionObj = {
    //     type:SET_EVENTS,
    //     payload:[...events]
    // }
    // console.log('actionObj ', actionObj)
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

