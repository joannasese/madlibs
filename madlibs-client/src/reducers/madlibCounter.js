const initialState = {
  noun: '',
  adj: '',
  verb: '',
  counter: 0,
  sentence: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TO_COUNTER':
    console.log(action.payload)
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
