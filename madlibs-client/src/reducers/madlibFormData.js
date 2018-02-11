//reducers
//Reducer would take information from action to change the state.

const initialState = {
  noun: '',
  adj: '',
  verb: '',
  counter: 0,
  sentence: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATED_DATA':
      return action.madlibFormData;
    case 'RESET_MADLIB_FORM':
      return initialState;
    case 'ADD_TO_COUNTER':
console.log("reducer counter:" + action.payload)
      // return {...state, counter: state.counter + 1}
      // return Object.assign({}, state, {counter: state.counter})
     return Object.assign({}, state, { counter: action.payload })




    default:
      return state;
  }
}
