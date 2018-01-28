//containers

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMadlibFormData } from '../actions/madlibForm';
import { createMadlib } from '../actions/madlibs';

class MadlibForm extends Component {
  // render(){
  //   return (
  //     <div>
  //       Word input
  //     </div>
  //   )
  // }

  handleOnChange = event => {
    const currentMadlibFormData = Object.assign({}, this.props.madlibFormData, (
      [window.name]: value
    ))
    this.props.updateMadlibFormData(currentMadlibFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createMadlib(this.props.madlibFormData)
  }

  render() {
    const { noun, adj, verb } = this.props.madlibFormData;
    return (
      <div>
        Submit words for madlib.
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="noun">Noun:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="noun"
              value={noun}
            />
          </div>
          <div>
            <label htmlFor="adj">Adjective:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="adj"
              value={adj}
            />
          </div>
          <div>
            <label htmlFor="verb">Verb:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="verb"
              value={verb}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    madlibFormData: state.madlibFormData
  }
}

export default connect(mapStateToProps, {
  updateMadlibFormData,
  createMadlib
})(MadlibForm);

// export default MadlibForm;
