// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getMadlibs } from '../actions/madlibsAction';
// import { madlibCounter } from '../actions/madlibCounter';
//
// class Counter extends Component {
//
//   constructor() {
//    super();
//
//    this.state = {
//      counter: 0
//    }
// }
//
//   // handleOnClick = event => {
//   //   event.preventDefault()
//   //   this.props.madlibCounter(this.props.counter, this.props.id)
//   //   console.log(this.props.counter)
//   // }
//
//   render() {
//     console.log(this.props)
//     return (
//       <button onClick={this.props.handleOnClick}>&hearts; {this.props.counter} </button>
//     )
//   }
// }

// export default Counter;
// export default connect(null, {madlibCounter})(Counter);

import React from 'react';

const Counter = (props) => {
  return (
    <div>
      <button onClick={props.handleOnClick}>&hearts; {props.counter} </button>
    </div>
  )
}

export default Counter
