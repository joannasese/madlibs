const initialState = {
  noun: '',
  adj: '',
  verb: '',
  counter: 0,
  sentence: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_COUNTER_SUCCESS':
    console.log(action.counterInfo)
      return action.counterInfo;
    case 'ADD_TO_COUNTER':
      console.log(action.payload)
      console.log(state.counter)
      return {...state,
        counter: action.payload.counter
      }
        // return {...state,
        //   counter: state.counter
        // }

      //SOMETHING IS WRONG HERE
     // return Object.assign({}, state, { counter: action.payload });
     // return Object.assign({}, state, { counter: state.counter });
    default:
      return state;
  }

}
