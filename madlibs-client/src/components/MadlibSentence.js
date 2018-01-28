//components

import React from 'react';

const MadlibSentence = ({ madlib }) => (
  <p key = {madlib.id}>The {madlib.adj} {madlib.noun} always wanted to learn how to {madlib.verb}.</p>
)

export default MadlibSentence;

// <h2>
//     {words.map((word, index) => {
// // There's probably a nicer way to accomplish this. Also, formatting needs fixing.
//       if (word.noun && word.adj && word.verb){
//         const phrase = phrases[Math.floor(Math.random()*phrases.length)];
//         let newStr = phrase.replace(/NOUN/, word.noun).replace(/ADJ/, word.adj).replace(/VERB/, word.verb)
//         return newStr;
//       } else {
//         return "Hey, you forgot something!"
//       }
//     })}
//   </h2>
