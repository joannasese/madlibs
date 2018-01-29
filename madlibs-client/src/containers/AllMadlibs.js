//containers

import React from 'react';
import { connect} from 'react-redux';
import { getMadlibs } from '../actions/madlibs';
import MadlibSentence from '../components/MadlibSentence';

const All = ({madlibs}) =>
  <div>
    {madlibs.map((madlib, index, array) => {

      if (madlib.noun && madlib.adj && madlib.verb){
        return <MadlibSentence key={madlib.id} madlib={madlib} />
      } else {
        return "Hey, you forgot something!"
      }

    })}
  </div>

const mapStateToProps = (state) => {
  return ({madlibs: state.madlibs})
}

export default connect(mapStateToProps, {
  getMadlibs
})(All);
