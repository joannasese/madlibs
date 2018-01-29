//components

import React from 'react';

const MadlibSentence = ({ madlib }) => (
  <p key = {madlib.id}>This is the sentence container: The <strong>{madlib.adj} {madlib.noun}</strong> always wanted to learn how to <strong>{madlib.verb}</strong>.</p>
)

export default MadlibSentence;
