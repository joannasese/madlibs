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
      // return { counter: state.counter + 1 };
      console.log(state.counter)
      return Object.assign({}, state, {counter: state.counter + 5});
    default:
      return state;
  }
}
