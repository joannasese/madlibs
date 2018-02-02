//components

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMadlibs } from '../actions/madlibs';
import { madlibCounter } from '../actions/madlibCounter';

class MadlibSentence extends Component {
  constructor(props){
    super(props)

    this.state = {
      counter: this.props.madlib.counter
    }
  }

  handleOnClick = (event) => {
    event.preventDefault()
    this.setState({counter: ++this.state.counter })
    this.props.madlibCounter(this.state.counter, this.props.madlib.id)
  }

  render(){
    const {madlib} = this.props
    let phrases =
      [
        <div key={madlib.id}>The <strong>{madlib.adj} {madlib.noun}</strong> enjoys when I <strong>{madlib.verb}</strong>.</div>,
        <div key={madlib.id}>Everyone would <strong>{madlib.verb}</strong> a <strong>{madlib.adj} {madlib.noun}</strong>.</div>,
        <div key={madlib.id}>Sometimes I wish <strong>{madlib.noun}</strong> would be <strong>{madlib.adj}</strong> when it is time to <strong>{madlib.verb}</strong>.</div>,
        <div key={madlib.id}>Heavy is the <strong>{madlib.noun}</strong> that needs to <strong>{madlib.verb}</strong> during <strong>{madlib.adj}</strong> hour.</div>,
        <div key={madlib.id}>The <strong>{madlib.adj} {madlib.noun}</strong> always wanted to learn how to <strong>{madlib.verb}</strong>.</div>
      ]

      const phrase = phrases[Math.floor(Math.random()*phrases.length)];
    return (
      <div>
        {phrase}
        <button onClick={this.handleOnClick}>&hearts; props counter: {this.props.madlib.counter} | state counter: {this.state.counter}</button>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({counter: state.counter})
}

export default connect(mapStateToProps, {
  madlibCounter,
  getMadlibs
})(MadlibSentence);
