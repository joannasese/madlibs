//containers

import React from 'react';
import { connect} from 'react-redux';
import './Madlibs.css';
import { getMadlibs } from '../actions/madlibs';
import MadlibSentence from '../components/MadlibSentence';

const Madlibs = ({madlibs}) =>
  <div>
    {madlibs.map((madlib, index, array) => {
      if (array.length-1 === index) {
        if (madlib.noun && madlib.adj && madlib.verb){
          return <div className="sentence">
            <MadlibSentence key={madlib.id} madlib={madlib} />
          </div>
        } else {
          return "Hey, you forgot something!"
        }
      }
    })}
  </div>

const mapStateToProps = (state) => {
  return ({madlibs: state.madlibs})
}

export default connect(mapStateToProps, {
  getMadlibs
})(Madlibs);
