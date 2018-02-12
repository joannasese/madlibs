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

const setCounter = counterInfo => {
  return {
    type: 'GET_COUNTER_SUCCESS',
    counterInfo
  }
}

export const getCounter = (counterInfo) => {
  const headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
  return dispatch => {
    return fetch(`${API_URL}/madlibs/${counterInfo.id}`, {
      method: 'GET',
      headers: headers,
    })
      .then(response => response.json())
      .then(madlibs => dispatch(setCounter(counterInfo)))
      .catch(error => console.log(error))
  }
}
