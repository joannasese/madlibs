//reducers

const initialState = {
  noun: '',
  adj: '',
  verb: ''
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
