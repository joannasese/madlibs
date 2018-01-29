import React, { Component } from 'react';
import { connect} from 'react-redux';
import { getMadlibs } from '../actions/madlibs';
import Madlibs from './Madlibs';

// const AllMadlibs = ({Madlibs}) =>
//   <div>
//     {Madlibs.map((madlib) => {
//       return madlib
//     })}
//   </div>

class AllMadlibs extends Component {
  render() {
    return (
      <div>
      <h3>All madlibs</h3>
      <Madlibs />
      {madlibs.map((madlib, index, array) => {
        
      })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({madlibs: state.madlibs})
}

// export default connect(mapStateToProps, {
//   getMadlibs
// })(AllMadlibs);

export default AllMadlibs;
