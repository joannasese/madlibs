//reducers
//Reducer would take information from action to change the state.

const initialState = {
  noun: '',
  adj: '',
  verb: '',
  counter: 0
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATED_DATA':
      return action.madlibFormData;
    case 'RESET_MADLIB_FORM':
      return initialState;
    default:
      return state;
  }
}
