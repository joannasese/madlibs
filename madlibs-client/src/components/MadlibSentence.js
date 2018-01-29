//components
// DON'T NEED ANYMORE. DELETE WHEN SURE.

import React from 'react';

const phrases = ({ madlib })  => {
  [
    <p key={madlib.id}>The <strong>{madlib.adj} {madlib.noun}</strong> enjoys when I <strong>{madlib.verb}</strong>.</p>,
    <p key={madlib.id}>Everyone would <strong>{madlib.verb}</strong> a <strong>{madlib.adj} {madlib.noun}</strong>.</p>,
    <p key={madlib.id}>Sometimes I wish <strong>{madlib.noun}</strong> would be <strong>{madlib.adj}</strong> when it is time to <strong>{madlib.verb}</strong>.</p>,
    <p key={madlib.id}>Heavy is the <strong>{madlib.noun}</strong> that needs to <strong>{madlib.verb}</strong> during <strong>{madlib.adj}</strong> hour.</p>
  ];
}

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
