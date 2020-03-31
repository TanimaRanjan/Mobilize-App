
import {
  setEventsData, setEvents, setPageNo, setError
} from './actions/eventsAction'

import eventsReducer from './reducers/eventsReducer'


// TEST ACTION 
test('Should set up add events action object ', () => {
  const action = setEvents(['1', '2'])
  expect(action).toEqual({
      type: 'SET_EVENTS', 
      payload: ['1', '2']
  })
})


test('Should set up page no action object ', () => {
const action = setPageNo(3)
expect(action).toEqual({
    type: 'SET_PAGENO', 
    payload: 3
})
})

// test('Should set up error no action object ', () => {
// const action = setError('ERROR MESSAGE')
// expect(action).toEqual({
//     type: 'SET_ERROR', 
//     payload: 'ERROR MESSAGE'
// })
// })

// TESTING REDUCER 
test('Set PageNo ', () => {
const pageNO = 2
const action = {type:'SET_PAGENO', payload:pageNO}
const result = eventsReducer(pageNO, action)

expect(result).toEqual(
  {"pageNo": 2}
)
})


test('Set Events ', () => {
 const events = {
   data:[
     {
       "id": 1,
       "description": "example 1",
       "timezone": "America/New_York"
     }, 
     {
       "id": 2,
       "description": "example 2",
       "timezone": "America/New_York",
     }
 ] 
}   

const prevState = {
  data:[
    {
      "id": 3,
      "description": "example 1",
      "timezone": "America/New_York"
    }, 
    {
      "id": 4,
      "description": "example 2",
      "timezone": "America/New_York",
    }
] }   

const action = {type:'SET_EVENTS', payload:events.data}
const result = eventsReducer(prevState, action)
expect(result).toEqual({
  data: [
   ...prevState.data,
   ...action.payload
  ]
  })
})
