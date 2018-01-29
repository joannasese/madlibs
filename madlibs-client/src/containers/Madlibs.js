//containers

import React, { Component } from 'react';
import { connect} from 'react-redux';
import { getMadlibs } from '../actions/madlibs';
import MadlibSentence from '../components/MadlibSentence';

const Madlibs = ({madlibs}) =>
  <div>
    {madlibs.map((madlib, index, array) => {

      const phrases = [
        <p key={madlib.id}>The <strong>{madlib.adj} {madlib.noun}</strong> enjoys when I <strong>{madlib.verb}</strong>.</p>,
        <p key={madlib.id}>Everyone would <strong>{madlib.verb}</strong> a <strong>{madlib.adj} {madlib.noun}</strong>.</p>,
        <p key={madlib.id}>Sometimes I wish <strong>{madlib.noun}</strong> would be <strong>{madlib.adj}</strong> when it is time to <strong>{madlib.verb}</strong>.</p>,
        <p key={madlib.id}>Heavy is the <strong>{madlib.noun}</strong> that needs to <strong>{madlib.verb}</strong> during <strong>{madlib.adj}</strong> hour.</p>
      ];

      const phrase = phrases[Math.floor(Math.random()*phrases.length)];

      if (array.length-1 === index) {
        if (madlib.noun && madlib.adj && madlib.verb){
          return phrase
          // return <MadlibSentence key={madlib.id} madlib={madlib} />
        } else {
          return "Hey, you forgot something!"
        }
      }
    })}
  </div>

// class Madlibs extends Component {
//
//   componentDidMount() {
//     this.props.getMadlibs()
//   }
//
//   render() {
//     return(
//       <div>
//         <h3>Madlibs Container</h3>
//
//           {this.props.madlibs.map((madlib, index, array) => {
//             const phrases = [
//                     <p key={madlib.id}>The <strong>{madlib.adj} {madlib.noun}</strong> enjoys when I <strong>{madlib.verb}</strong>.</p>,
//                     <p key={madlib.id}>Everyone would <strong>{madlib.verb}</strong> a <strong>{madlib.adj} {madlib.noun}</strong>.</p>,
//                     <p key={madlib.id}>Sometimes I wish <strong>{madlib.noun}</strong> would be <strong>{madlib.adj}</strong> when it is time to <strong>{madlib.verb}</strong>.</p>,
//                     <p key={madlib.id}>Heavy is the <strong>{madlib.noun}</strong> that needs to <strong>{madlib.verb}</strong> during <strong>{madlib.adj}</strong> hour.</p>
//                   ];
//
//             if (array.length-1 === index) {
//               const phrase = phrases[Math.floor(Math.random()*phrases.length)];
//               return phrase;
//               // return <MadlibSentence key={madlib.id} madlib={madlib} />
//             }
//           })}
//
//       </div>
//     );
//   }
// }


const mapStateToProps = (state) => {
  return ({madlibs: state.madlibs})
}

export default connect(mapStateToProps, {
  getMadlibs
})(Madlibs);
