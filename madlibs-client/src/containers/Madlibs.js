//containers

import React, { Component } from 'react';
import { connect} from 'react-redux';
import MadlibSentence from '../components/MadlibSentence';
import MadlibForm from './MadlibForm'
import { getMadlibs } from '../actions/madlibs';

export class Madlibs extends Component {

  componentDidMount() {
    this.props.getMadlibs()
  }

  render() {
    return(
      <div>
        <h3>Madlibs</h3>
        <MadlibForm />
        <p>{this.props.madlibs.map(madlib => <MadlibSentence key={madlib.id} madlib={madlib} />)}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    madlibs: state.madlibs
  })
}

export default connect(mapStateToProps, { getMadlibs })(Madlibs);
