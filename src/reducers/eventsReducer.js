import { 
    SET_EVENTS, 
    SET_PAGENO,
    SET_ERROR
} from '../actions/types'

const initialState = {

}

const eventsReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_EVENTS:
            return {
                ...state
            }

        default:
            return state
    }
}

export default eventsReducer