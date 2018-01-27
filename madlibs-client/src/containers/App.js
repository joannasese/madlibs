import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from '../components/Navbar';
import Home from '../components/Home';
import Madlibs from './Madlibs';
// import { getMadlibs } from '../actions/madlibs';

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
    console.log(Madlibs)
    return (
      <Router>
        <div className="App">
          <NavBar className="navbar" />
          <Route exact path="/" component={Home} />
          <Route exact path="/madlibs" component={Madlibs} />
        </div>
      </Router>
    )
  }
}

export default App;
