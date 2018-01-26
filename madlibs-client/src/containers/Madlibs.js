import React from 'react';

const Madlibs = (props) => (
  <div>
    <h3>Madlibs</h3>
    {props.madlibs.map(madlib =>
      <h2>The {madlib.adj} {madlib.noun} always wanted to learn how to {madlib.verb}.</h2>
    )}
  </div>
)

export default Madlibs;
