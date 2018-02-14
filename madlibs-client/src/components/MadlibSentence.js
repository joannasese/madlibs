//components

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { getMadlibs, madlibCounter } from '../actions/madlibsAction';
// import { madlibCounter } from '../actions/madlibCounter';

class MadlibSentence extends Component {
  constructor(props){
    super(props)

    this.state = {
      phrase: ''
    }
  }

  handleOnLike = (event) => {
    event.preventDefault()
    const counterInfo = {
      counter: this.props.madlib.counter + 1,
      id: this.props.madlib.id

    }
    this.props.madlibCounter(counterInfo)
  }

  componentWillMount() {
    const {madlib} = this.props
    let phrases =
      [
        <div key={madlib.id}>The <strong>{madlib.adj} {madlib.noun}</strong> enjoys when I <strong>{madlib.verb}</strong>.</div>,
        <div key={madlib.id}>Everyone would <strong>{madlib.verb}</strong> a <strong>{madlib.adj} {madlib.noun}</strong>.</div>,
        <div key={madlib.id}>Sometimes I wish <strong>{madlib.noun}</strong> would be <strong>{madlib.adj}</strong> when it is time to <strong>{madlib.verb}</strong>.</div>,
        <div key={madlib.id}>Heavy is the <strong>{madlib.noun}</strong> that needs to <strong>{madlib.verb}</strong> during <strong>{madlib.adj}</strong> hour.</div>,
        <div key={madlib.id}>The <strong>{madlib.adj} {madlib.noun}</strong> always wanted to learn how to <strong>{madlib.verb}</strong>.</div>
      ]

      this.setState({phrase: phrases[Math.floor(Math.random()*phrases.length)] })
  }

  render(){
    const {counter} = this.props.madlib
    const {id} = this.props.madlib

    // let phrases =
    //   [
    //     <div key={madlib.id}>The <strong>{madlib.adj} {madlib.noun}</strong> enjoys when I <strong>{madlib.verb}</strong>.</div>,
    //     <div key={madlib.id}>Everyone would <strong>{madlib.verb}</strong> a <strong>{madlib.adj} {madlib.noun}</strong>.</div>,
    //     <div key={madlib.id}>Sometimes I wish <strong>{madlib.noun}</strong> would be <strong>{madlib.adj}</strong> when it is time to <strong>{madlib.verb}</strong>.</div>,
    //     <div key={madlib.id}>Heavy is the <strong>{madlib.noun}</strong> that needs to <strong>{madlib.verb}</strong> during <strong>{madlib.adj}</strong> hour.</div>,
    //     <div key={madlib.id}>The <strong>{madlib.adj} {madlib.noun}</strong> always wanted to learn how to <strong>{madlib.verb}</strong>.</div>
    //   ]
    //   const phrase = phrases[Math.floor(Math.random()*phrases.length)]
    //
    //   console.log(madlib.sentence)
    return (
      <div>
        {this.state.phrase}
        <Counter counter={counter} id={id} handleOnLike={this.handleOnLike} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  //currently not active
  return {
    // counter: state.madlibCounter.counter,
    counter: ownProps.madlib.counter,
    id: ownProps.madlib.counter
  }
}

export default connect(mapStateToProps, {
  getMadlibs,
  madlibCounter
})(MadlibSentence);
