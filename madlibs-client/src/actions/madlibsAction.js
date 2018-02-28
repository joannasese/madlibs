//actions
// In Redux, a user may click on a button which dispatches an action,
// and the reducer would take information from that action to change the state.

//dispatch
//1. dispatch persists changes to state
//2. ensures that when state updates, html updates

import { resetMadlibForm } from './madlibForm';

const API_URL = process.env.REACT_APP_API_URL

const setMadlibs = madlibs => {
  return {
    type: 'GET_MADLIBS_SUCCESS',
    madlibs
  }
}

const addMadlib = madlib => {
  return {
    type: 'CREATE_MADLIB_SUCCESS',
    madlib
  }
}

export const getMadlibs = () => {
  const headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
  return dispatch => {
    return fetch(`${API_URL}/madlibs`, {
      method: 'GET',
      headers: headers,
    })
      .then(response => response.json())
      .then(madlibs => dispatch(setMadlibs(madlibs)))
      .catch(error => console.log(error))
  }
}

export const createMadlib = madlib => {
  return dispatch => {
    return fetch(`${API_URL}/madlibs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ madlib: madlib })
    })
      .then(response => response.json())
      .then(madlib => {
        dispatch(addMadlib(madlib))
        dispatch(resetMadlibForm())
      })
      .catch(error => console.log(error))
  }
}

export const addSentence = (sentence, id) => {
  return dispatch => {
    return fetch(`${API_URL}/madlibs/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ sentence: sentence })
    })
      .then(response => response.json())
      .then(data => {dispatch ({ type: 'ADD_SENTENCE', payload: data} )})
      .catch(error => console.log(error))
  }
}

// const addToCounter = data => {
//   return {
//     type: 'ADD_TO_COUNTER',
//     payload: data
//     // counter
//   }
// }
//
// export const madlibCounter = (counterInfo) => {
//   return dispatch => {
//     return fetch(`${API_URL}/madlibs/${counterInfo.id}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({madlib: counterInfo})
//     })
//       .then(response => response.json())
//       .then(counter => {
//         dispatch(addToCounter(counterInfo))
//       })
//     }
// }

export const madlibCounter = (counterInfo) => {
  return dispatch => {
    return fetch(`${API_URL}/madlibs/${counterInfo.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({madlib: counterInfo})
    })
      .then(response => response.json())
      .then(data => dispatch( { type: 'ADD_TO_COUNTER', payload: data}))
    }
}
