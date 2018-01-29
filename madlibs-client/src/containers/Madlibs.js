//containers

import React, { Component } from 'react';
import { connect} from 'react-redux';
import MadlibForm from './MadlibForm'
import { getMadlibs } from '../actions/madlibs';

const Madlibs = ({madlibs}) =>
  <div>
    {madlibs.map((madlib, index, array) => {

      let phrases = [
        <p>The <strong>{madlib.adj} {madlib.noun}</strong> enjoys when I <strong>{madlib.verb}</strong>.</p>,
        <p>Everyone would <strong>{madlib.verb}</strong> a <strong>{madlib.adj} {madlib.noun}</strong>.</p>,
        <p>Sometimes I wish <strong>{madlib.noun}</strong></p>
      ];

      if (array.length-1 === index) {
        if (madlib.noun && madlib.adj && madlib.verb){
          const phrase = phrases[Math.floor(Math.random()*phrases.length)];
          return phrase;
        } else {
          return "Hey, you forgot something!"
        }
        // return <MadlibSentence key={madlib.id} madlib={madlib} />
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
//             if (array.length-1 === index) {
//               return <MadlibSentence key={madlib.id} madlib={madlib} />
//             }
//           })}
//
//       </div>
//     );
//   }
// }
//
const mapStateToProps = (state) => {
  return ({madlibs: state.madlibs})
}

export default connect(mapStateToProps, {
  getMadlibs
})(Madlibs);
