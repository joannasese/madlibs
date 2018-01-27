import React, { Component } from 'react';
import { connect } from 'react-redux';

class MadlibForm extends Component {
  render() {
    return (
      <div>
        <form>
          Submit words for madlib.
        </form>
      </div>
    )
  }
}

export default MadlibForm;
