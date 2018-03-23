import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from '../components/Navbar';
import Home from '../components/Home';
import MadlibForm from './MadlibForm';
import AllMadlibs from './AllMadlibs';
import Video from '../components/Video';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar className="navbar" />
          <Route exact path="/" component={Home} />
          <Route exact path="/madlibs" component={MadlibForm} />
          <Route exact path="/saved-madlibs" component={AllMadlibs} />
          <Route exact path="/random-nonsense" component={Video} />
        </div>
      </Router>
    )
  }
}

export default App;
