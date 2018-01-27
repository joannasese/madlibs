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
