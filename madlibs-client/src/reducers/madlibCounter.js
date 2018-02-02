//reducers

export default (state = {counter: 0}, action) => {
  switch(action.type) {
    case 'ADD_TO_COUNTER':
      return {counter: state.counter + 1}
    default:
      return state;
  }
}
