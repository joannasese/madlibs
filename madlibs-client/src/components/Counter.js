import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMadlibs } from '../actions/madlibsAction';
import { madlibCounter } from '../actions/madlibCounter';

class Counter extends Component {

  constructor(props) {
   super(props);
}

  handleOnClick = (event) => {
    event.preventDefault()
    this.props.madlibCounter(this.props.counter, this.props.id)
  }

  render() {
    console.log(this.props)
    return (
      <button onClick={this.handleOnClick}>&hearts; {this.props.counter} </button>
    )
  }
}

export default Counter;
