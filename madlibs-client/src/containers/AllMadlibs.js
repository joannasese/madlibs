import React from 'react';
import { connect} from 'react-redux';
import { getMadlibs } from '../actions/madlibs';

const AllMadlibs = ({madlibs}) =>
  <div>
    {madlibs.map((madlib) => {
      {madlib.noun}
    })}
  </div>

const mapStateToProps = (state) => {
  return ({madlibs: state.madlibs})
}

export default connect(mapStateToProps, {
  getMadlibs
})(AllMadlibs);
