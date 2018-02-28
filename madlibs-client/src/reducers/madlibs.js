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
// return newObj
      return state.map(object => object.id === action.payload.id ? newObj : object)

      // state.map(object => {
      //   if (object.id === action.payload.id){
      //     return Object.assign({}, object, {counter: action.payload.counter + 1})
      //     // return {...object,
      //     //   counter: ++action.payload.counter
      //       // counter: object.counter + 1
      //   }
      // })

    case 'ADD_SENTENCE':
      console.log(object)
      return Object.assign({}, state, {sentence: action.payload.sentence})

    default:
      return state;
  }
}
