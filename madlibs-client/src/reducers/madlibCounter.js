//reducers

const initialState = {
  noun: '',
  adj: '',
  verb: '',
  counter: 0
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TO_COUNTER':
      // return Object.assign({}, state, {counter: state.counter + 1}); // this doesn't work
      return {...state, counter: action.payload}
      // return Object.assign({}, state, {counter: action.payload}); //just another way of writing with object spread
    default:
      return state;
  }
}
