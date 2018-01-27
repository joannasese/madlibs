const API_URL = process.env.REACT_APP_API_URL

const setMadlibs = madlibs => {
  return {
    type: 'GET_MADLIBS_SUCCESS',
    madlibs
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
