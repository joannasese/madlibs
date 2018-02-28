//containers

import React, { Component } from 'react';
import { connect} from 'react-redux';
import './Madlibs.css';
import { getMadlibs } from '../actions/madlibsAction';
import MadlibSentence from '../components/MadlibSentence';

class AllMadlibs extends Component {

  componentDidMount() {
    this.props.getMadlibs()
  }

  render() {
    return (
      <div>
        <p>A bunch of random thoughts:</p>
          {this.props.madlibs.reverse().map((madlib, index, array) => {
            if (madlib.noun && madlib.adj && madlib.verb){
              return <div key={madlib.id} className="sentence" >
                {madlib.sentence}
                <MadlibSentence key={madlib.id} madlib={madlib} />
              </div>
            }
          })}
      </div>
    )
  }
}

// in mapStateToProps() we specify exactly which slice of the state
// we want to provide to our component.
const mapStateToProps = (state) => {
  return {
    madlibs: state.madlibs.slice(state.madlibs.length-10, state.madlibs.length)
  }
}

// Use connect to give component ability to get data from the store's internal state
// and re-render and get new data when that state changes
export default connect(mapStateToProps, {
  getMadlibs //equivalent to mapDispatchToProps, except return statement is in actions.
})(AllMadlibs);
