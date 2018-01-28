//containers

import React, { Component } from 'react';
import { connect} from 'react-redux';
import MadlibSentence from '../components/MadlibSentence';
import MadlibForm from './MadlibForm'
import { getMadlibs } from '../actions/madlibs';

class Madlibs extends Component {

  componentDidMount() {
    this.props.getMadlibs()
  }

  render() {
    console.log(this.props.madlibs)
    return(
      <div>
        <h3>Madlibs</h3>
        <MadlibForm />
        <div>
          {this.props.madlibs.map((madlib, index, array) => {
            console.log(index)
            if (array.length-1 === index) {
              return <MadlibSentence key={madlib.id} madlib={madlib} />
            }
          })}
        </div>
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
