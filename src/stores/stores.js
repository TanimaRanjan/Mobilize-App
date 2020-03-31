import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import eventsReducer from '../reducers/eventsReducer'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                        || compose

// Create Store
export default () => {
    const store = createStore(
        // combine reducers 
        combineReducers({
            events:eventsReducer
        }),
        composeEnhancer(applyMiddleware(thunk))
    )
    return store
}