import React, {Component} from 'react';
import './App.css';
import Madlibs from './Madlibs';
import { getMadlibs } from '../actions/madlibs';


class App extends Component {
  // constructor(props){
  //   super(props)
  //
  //   this.state = {
  //     madlibs: []
  //   }
  // }

  // componentDidMount(){
  //   this.props.getMadlibs()
    // const headers = new Headers({
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json',
    //   'Access-Control-Allow-Origin': '*'
    // })
    //
    // fetch(`${API_URL}/madlibs`, {
    //   headers: headers,
    //   // mode: 'no-cors'
    // })
    //   .then(response => response.json())
    //   .then(madlibs => this.setState({ madlibs }))
  // }

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
