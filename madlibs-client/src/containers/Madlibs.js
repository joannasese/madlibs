import React, { Component } from 'react';
import MadlibSentence from '../components/MadlibSentence';
import MadlibForm from './MadlibForm'

class Madlibs extends Component {

  render() {
    return(
      <div>
        <h3>Madlibs</h3>
        {this.props.madlibs.map(madlib => <MadlibSentence key = {madlib.id} madlib={madlib} />)}
        <MadlibForm />
      </div>
    )
  }
}

export default Madlibs;
