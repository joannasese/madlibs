// import { resetMadlibForm } from './madlibForm';

const API_URL = process.env.REACT_APP_API_URL

const addToCounter = data => {
  console.log(data)
  return {
    type: 'ADD_TO_COUNTER',
    payload: data
    // counter
  }
}


export const madlibCounter = (counterInfo) => {
  console.log(counterInfo.counter)
  return dispatch => {
    return fetch(`${API_URL}/madlibs/${counterInfo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({counter: counterInfo.counter})
    })
      .then(response => response.json())
      .then(counter => {
        dispatch(addToCounter(counterInfo))
        // dispatch(resetMadlibForm())
      })
    }
}
