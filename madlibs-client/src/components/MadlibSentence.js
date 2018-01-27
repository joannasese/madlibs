import React from 'react';

const MadlibSentence = ({ madlib }) => (
  <p key = {madlib.id}>The {madlib.adj} {madlib.noun} always wanted to learn how to {madlib.verb}.</p>
)

export default MadlibSentence;
