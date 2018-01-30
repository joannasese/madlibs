//actions
// In Redux, a user may click on a button which dispatches an action,
// and the reducer would take information from that action to change the state.

//dispatch
//1. dispatch persists changes to state
//2. ensures that when state updates, html updates

export const updateMadlibFormData = madlibFormData => {
  return {
    type: 'UPDATED_DATA',
    madlibFormData
  }
}

export const resetMadlibForm = () => {
  return {
    type: 'RESET_MADLIB_FORM'
  }
}
