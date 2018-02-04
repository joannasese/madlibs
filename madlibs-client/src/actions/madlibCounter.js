const API_URL = process.env.REACT_APP_API_URL

const addToCounter = counter => {
  return {
    type: 'ADD_TO_COUNTER',
    counter
  }
}

export const madlibCounter = (counter, id) => {
  return dispatch => {
    return fetch(`${API_URL}/madlibs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify({counter: counter})
    })
      .then(response => response.json())
      .then(counter => {
        dispatch(addToCounter(counter))
      })
    }
}