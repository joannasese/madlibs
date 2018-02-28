//containers

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { updateMadlibFormData } from '../actions/madlibForm';
import { createMadlib } from '../actions/madlibsAction';
import { getMadlibs } from '../actions/madlibsAction';
import { addSentence } from '../actions/madlibsAction';
import MadlibSentence from '../components/MadlibSentence';

class MadlibForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentMadlibFormData = Object.assign({}, this.props.madlibFormData, {
      [name]: value
    })
    this.props.updateMadlibFormData(currentMadlibFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createMadlib(this.props.madlibFormData)

    //on submit, persist randomized madlib to database
    //currently hardcoded input to test patch mechanism
    // let madlibInfo = {
    //   sentence: this.props.madlibFormData.noun,
    //   id: 885
    // }
    // this.props.addSentence(madlibInfo)
  }

  compondentDidMount() {
    this.props.getMadlibs()
  }

  render() {
    const { noun, adj, verb } = this.props.madlibFormData;

    return (
      <div>
      <h3>Madlib Form</h3>
        It is madlib time! Fill in the blanks for a wacky madlib!<br />
        <form onSubmit={this.handleOnSubmit} className="madlibForm">
          <div>
            <label>Noun:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="noun"
              value={noun}
              placeholder="Ex: doohickey"
            />
          </div>
          <div>
            <label>Adjective:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="adj"
              value={adj}
              placeholder="Ex: cantankerous"
            />
          </div>
          <div>
            <label>Verb:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="verb"
              value={verb}
              placeholder="Ex: defenestrate"
            />
          </div>
          <button type="submit" className="button">Submit</button>
        </form>

        <div>
          {this.props.madlibs.map((madlib, index, array) => {
            if (array.length-1 === index) {
              if (madlib.noun && madlib.adj && madlib.verb){

                let madlibInfo = {
                  sentence: madlib.noun,
                  id: madlib.id
                }
                {this.props.addSentence(madlibInfo)}

                return <div key={madlib.id} className="sentence" >
                  {madlib.sentence}
                  <MadlibSentence key={madlib.id} madlib={madlib} />
                </div>
              } else {
                return "Hey, you forgot something!"
              }
            }
          })}

        </div>
      </div>
    )
  }
}

// in mapStateToProps() we specify exactly which slice of the state
// we want to provide to our component.
const mapStateToProps = state => {
  return {
    madlibFormData: state.madlibFormData,
    madlibs: state.madlibs
  }
}

// Use connect to give component ability to get data from the store's internal state
// and re-render and get new data when that state changes
export default connect(mapStateToProps, {
  updateMadlibFormData, //equivalent to mapDispatchToProps, except return statement is in actions.
  createMadlib, //equivalent to mapDispatchToProps, except return statement is in actions.
  getMadlibs,
  addSentence
})(MadlibForm);
