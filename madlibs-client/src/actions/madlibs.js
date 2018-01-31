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
