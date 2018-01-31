//containers

import React, { Component } from 'react';
import { connect} from 'react-redux';
import { getMadlibs } from '../actions/madlibs';
import MadlibSentence from '../components/MadlibSentence';

class All extends Component {

  componentDidMount() {
    this.props.getMadlibs()
  }

  render() {
    return (
      <div>
        <p>A bunch of random thoughts:</p>
          {this.props.madlibs.map((madlib, index, array) => {
            if (madlib.noun && madlib.adj && madlib.verb){
              return <div key={madlib.id} className="sentence" >
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
  const noT = state.madlibs.filter(madlib => {
   return !madlib.noun.match(/(\bt\S+\b)/ig) &&
   !madlib.adj.match(/(\bt\S+\b)/ig) &&
   !madlib.verb.match(/(\bt\S+\b)/ig) 
  })
  return {
    madlibs: noT
  }
}

// Use connect to give component ability to get data from the store's internal state
// and re-render and get new data when that state changes
export default connect(mapStateToProps, {
  getMadlibs //equivalent to mapDispatchToProps, except return statement is in actions.
})(All);
