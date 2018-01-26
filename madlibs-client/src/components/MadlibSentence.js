import React from 'react';

const MadlibSentence = ({ madlib }) => (
  <h2 key = {madlib.id}>The {madlib.adj} {madlib.noun} always wanted to learn how to {madlib.verb}.</h2>
)

export default MadlibSentence;
