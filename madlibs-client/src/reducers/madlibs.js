//simple reducer
export default (state = [], action) => {
  switch(action.type) {
    case 'GET_MADLIBS_SUCCESS':
      return action.madlibs;
    default:
      return state;
  }
}
