//components

import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import Save from '../components/Save';
import { getMadlibs, madlibCounter, addSentence } from '../actions/madlibsAction';

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

  handleOnSave = (event) => {
    event.preventDefault()
    let array = this.state.phrase.props.children
    let newArray = array.slice(0, array.length)
    // let newArray = [];
    for (let word of newArray){
      if (typeof word !== "string"){
        // console.log(array.indexOf(word))
        // word = word.props.children
        //
        // console.log(word)

        newArray.splice(newArray.indexOf(word), 1, word.props.children)
        let madlibInfo = {
          sentence: newArray.join(''),
          id: this.props.madlib.id
        }
        this.props.addSentence(madlibInfo)
      }
    }
    // let madlibInfo = {
    //   sentence: array.join(''),
    //   id: this.props.madlib.id
    // }
    // this.props.addSentence(madlibInfo)
  }

  componentWillMount() {
    const {madlib} = this.props
    let phrases =
      [
        <div key={madlib.id}>The <strong>{madlib.noun}</strong> enjoys when I <strong>{madlib.verb}</strong>, but only if I am <strong>{madlib.adj}</strong>.</div>,
        <div key={madlib.id}>Everyone would <strong>{madlib.verb}</strong> a <strong>{madlib.noun}</strong> on a <strong>{madlib.adj}</strong> day.</div>,
        <div key={madlib.id}>Sometimes I wish <strong>{madlib.noun}</strong> would be <strong>{madlib.adj}</strong> when it is time to <strong>{madlib.verb}</strong>.</div>,
        <div key={madlib.id}>Heavy is the <strong>{madlib.noun}</strong> that needs to <strong>{madlib.verb}</strong> during <strong>{madlib.adj}</strong> hour.</div>,
        <div key={madlib.id}>A <strong>{madlib.adj}</strong> person is a <strong>{madlib.noun}</strong> when it is time to <strong>{madlib.verb}</strong>.</div>
      ]
    this.setState({phrase: phrases[Math.floor(Math.random()*phrases.length)] })
  }

  render(){
    // console.log(this.state.phrase)
    const {counter, id, sentence} = this.props.madlib

    return (
      <div>
        API: {sentence}
        {this.state.phrase}
        <Counter counter={counter} id={id} handleOnLike={this.handleOnLike} />
        <Save sentence={sentence} id={id} handleOnSave={this.handleOnSave} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  //currently not active
  return {
    counter: ownProps.madlib.counter,
    id: ownProps.madlib.id,
    sentence: state.phrase
  }
}

export default connect(mapStateToProps, {
  getMadlibs,
  madlibCounter,
  addSentence
})(MadlibSentence);
