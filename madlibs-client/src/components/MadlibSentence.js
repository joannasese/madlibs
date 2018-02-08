//components

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMadlibs } from '../actions/madlibsAction';
import { madlibCounter } from '../actions/madlibCounter';

class MadlibSentence extends Component {
  // for counter separate from redux
  constructor(props){
    super(props)

    this.state = {
      phrase: ''
    }
  }

  handleOnClick = (event) => {
    event.preventDefault()
    // this.setState({counter: ++this.state.counter }) // for counter separate from redux
    this.props.getMadlibs() // why do i need to call this if it's called in the parent?
    this.props.madlibCounter(this.props.madlib.counter, this.props.madlib.id)
    this.props.getMadlibs()
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

      // * perhaps here is where i should call an action that will *edit* the sentence in an existing record

      // const phrase = phrases[Math.floor(Math.random()*phrases.length)]
      // const sentence = Object.assign({}, this.props.madlib.sentence, {
      //   phrase
      // })
      // console.log(sentence)
  }

  render(){
    const {madlib} = this.props
      // const phrase = phrases[Math.floor(Math.random()*phrases.length)]
      // const sentence = Object.assign({}, this.props.madlib.sentence, {
      //   phrase
      // })

// somehow assign phrase a value and pass value into createMadlib function??
    return (
      <div>
        {this.state.phrase}
        <button onClick={this.handleOnClick}>&hearts; {madlib.counter} </button>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    counter: state.counter,
    sentence: state.sentence
  })
}

export default connect(mapStateToProps, {
  madlibCounter,
  getMadlibs
})(MadlibSentence);
