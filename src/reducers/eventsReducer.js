import { 
    SET_EVENTS, 
    SET_PAGENO,
    SET_ERROR
} from '../actions/types'

const initialState = {
    data:[]
}

const eventsReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_EVENTS:
            return {
                ...state,
                data:[...state.data,
                    ...action.payload]
            }
        case SET_PAGENO:
                return {
                    ...state,
                    pageNo:action.payload
                }
        default:
            return state
    }
}

export default eventsReducer