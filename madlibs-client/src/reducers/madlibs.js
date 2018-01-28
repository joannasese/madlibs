//reducers

export default (state = [], action) => {
  switch(action.type) {
    case 'GET_MADLIBS_SUCCESS':
      return action.madlibs;
    case 'CREATE_MADLIB_SUCCESS':
      return state.concat(action.madlib);
    default:
      return state;
  }
}
