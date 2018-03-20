//reducers
//Reducer would take information from action to change the state.
//

export default (state = [], action) => {
  //state is the array of madlibs
  switch(action.type) {
    case 'GET_MADLIBS_SUCCESS':
      return action.madlibs;
    case 'CREATE_MADLIB_SUCCESS':
      return state.concat(action.madlib);
    case 'ADD_TO_COUNTER':
      const object = state.filter(obj => obj.id === action.payload.id)[0]
      const newObj = Object.assign({}, object, {counter: action.payload.counter})
      return state.map(object => object.id === action.payload.id ? newObj : object)

    case 'ADD_SENTENCE':
      // return Object.assign({}, state, {sentence: action.payload.sentence})

      const bun = state.filter(obj => obj.id === action.payload.id)[0]
      const newBun = Object.assign({}, bun, {sentence: action.payload.sentence})
      return state.map(bun => bun.id === action.payload.id ? newBun : bun)


    default:
      return state;
  }
}
