//containers

import React from 'react';
import { connect} from 'react-redux';
import { getMadlibs } from '../actions/madlibs';
import MadlibSentence from '../components/MadlibSentence';

const All = ({madlibs}) =>
  <div>
  <p>A bunch of random thoughts:</p>
    {madlibs.map((madlib, index, array) => {
      if (madlib.noun && madlib.adj && madlib.verb){
        return <MadlibSentence key={madlib.id} madlib={madlib} />
      }
    })}
  </div>

const mapStateToProps = (state) => {
  return ({madlibs: state.madlibs})
}

export default connect(mapStateToProps, {
  getMadlibs
})(All);
