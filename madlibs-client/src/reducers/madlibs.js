//reducers
//Reducer would take information from action to change the state.
//
// const initialState = {
//   noun: '',
//   adj: '',
//   verb: '',
//   counter: 0,
//   sentence: ''
// }

export default (state = [], action) => {
  //state is the array of madlibs
console.log(state)
  switch(action.type) {

    case 'GET_MADLIBS_SUCCESS':
      return action.madlibs;
    case 'CREATE_MADLIB_SUCCESS':
      return state.concat(action.madlib);
    case 'ADD_TO_COUNTER':
      let object = state.filter(obj => obj.id === action.payload.id)[0]
      console.log(object)
      let newObj = Object.assign({}, object, {counter: action.payload.counter + 1 })
      return state.map(object => object.id === action.payload.id ? newObj : object)

      // state.filter(object => {
      //   if (object.id === action.payload.id){
      //     return Object.assign({}, object, {counter: action.payload.counter + 1})
      //     // return {...object,
      //     //   counter: ++action.payload.counter
      //       // counter: object.counter + 1
      //   }
      // })

    default:
      return state;
  }
}
