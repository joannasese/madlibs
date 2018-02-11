//components

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { getMadlibs } from '../actions/madlibsAction';
import { madlibCounter } from '../actions/madlibCounter';

class MadlibSentence extends Component {
  constructor(props){
    super(props)

    this.state = {
      phrase: ''
    }
  }

  handleOnClick = (event) => {
    event.preventDefault()


    const counterInfo = {
      counter: ++this.props.madlib.counter,
      id: this.props.madlib.id
    }

    this.props.madlibCounter(counterInfo)
console.log("madlib sentence:" + this.props.madlib.counter)
    // this.props.madlibCounter(this.props.madlib.counter, this.props.madlib.id)
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
        <Counter counter={counter} id={id} handleOnClick={this.handleOnClick} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    counter: state.counter,
    id: state.id
  })
}

export default connect(mapStateToProps, {
  getMadlibs,
  madlibCounter
})(MadlibSentence);
