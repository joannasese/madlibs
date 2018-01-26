import React, {Component} from 'react';
import './App.css';
import Madlibs from './Madlibs';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      madlibs: []
    }
  }



  componentDidMount(){

    const headers = new Headers({
      // 'Accept': 'application/json',
      // 'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
// const proxyurl = "https://cors-anywhere.herokuapp.com/";

    fetch('http://localhost:3000/api/madlibs', {
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
