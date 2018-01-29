//containers

import React, { Component } from 'react';
import { connect} from 'react-redux';
import MadlibForm from './MadlibForm'
import { getMadlibs } from '../actions/madlibs';

const Madlibs = ({madlibs}) =>
  <div>
    {madlibs.map((madlib, index, array) => {
      
      let phrases = [
        `The ${madlib.adj} ${madlib.noun} enjoys when I ${madlib.verb}.`,
        `Everyone would ${madlib.verb} a ${madlib.adj} ${madlib.noun}.`
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
