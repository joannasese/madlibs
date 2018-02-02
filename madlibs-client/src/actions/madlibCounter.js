const API_URL = process.env.REACT_APP_API_URL

const addToCounter = counter => {
  return {
    type: 'ADD_TO_COUNTER',
    counter
  }
}

export const madlibCounter = counter => {
  return dispatch => {
    return fetch(`${API_URL}/madlibs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ counter: counter })
    })
      .then(response => response.json())
      .then(counter => {
        dispatch(addToCounter(counter))
      })
    }
}
