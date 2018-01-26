import React, {Component} from 'react';
import './App.css';
import Madlibs from './Madlibs';

const API_URL = process.env.REACT_APP_API_URL

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      madlibs: []
    }
  }

  componentDidMount(){

    const headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
// const proxyurl = "https://cors-anywhere.herokuapp.com/";

    fetch(`${API_URL}/madlibs`, {
      headers: headers,
      // mode: 'no-cors'
    })
      .then(response => response.json())
      .then(madlibs => this.setState({ madlibs }))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Madlibs madlibs={this.state.madlibs} />
      </div>
    )
  }
}

export default App;
