import React, { Component } from 'react';
import { connect} from 'react-redux';
import MadlibSentence from '../components/MadlibSentence';
import MadlibForm from './MadlibForm'

class Madlibs extends Component {

  componentDidMount() {

  }

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

const mapStateToProps = (state) => {
  return ({
    madlibs: state.madlibs
  })
}

export default connect(mapStateToProps)(Madlibs);
