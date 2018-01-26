import React from 'react';
import MadlibSentence from '../components/MadlibSentence';

const Madlibs = (props) => (
  <div>
    <h3>Madlibs</h3>
    {props.madlibs.map(madlib => <MadlibSentence key = {madlib.id} madlib={madlib} />)}
  </div>
)

export default Madlibs;
