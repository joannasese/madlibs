//components
// DON'T NEED ANYMORE. DELETE WHEN SURE.

import React from 'react';

let phrases = [
  `The ADJ NOUN enjoys when I VERB.`,
  `Everyone would VERB a ADJ NOUN.`
];

const MadlibSentence = ({ madlib }) => (
  <div>
    let phrase = phrases[Math.floor(Math.random()*phrases.length)];
    let newStr = phrase.replace(/NOUN/, {madlib.noun}).replace(/ADJ/, {madlib.adj}).replace(/VERB/, {madlib.verb})
    return newStr;
  </div>
)

export default MadlibSentence;



// <p key={madlib.id}>
// The <strong>{madlib.adj} {madlib.noun}</strong> always wanted to learn how to <strong>{madlib.verb}</strong>.
// </p>
