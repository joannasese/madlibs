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

  switch(action.type) {

    case 'GET_MADLIBS_SUCCESS':
      return action.madlibs;
    case 'CREATE_MADLIB_SUCCESS':
      return state.concat(action.madlib);
    case 'ADD_TO_COUNTER':

      state.filter(object => {
        if (object.id === action.payload.id){
          return {...object,
            counter: ++action.payload.counter
            // counter: object.counter + 1
          }
        }
      })

    default:
      return state;
  }
}
