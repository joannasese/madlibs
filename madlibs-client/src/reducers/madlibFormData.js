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
      return state.counter + 1
      // return {...state, counter: action.payload}
    default:
      return state;
  }
}
