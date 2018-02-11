const API_URL = process.env.REACT_APP_API_URL

const addToCounter = counter => {
  console.log(counter)
  return {
    type: 'ADD_TO_COUNTER',
    payload: counter
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
        dispatch(addToCounter(counterInfo.counter))
      })
    }
}
