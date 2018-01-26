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
    fetch('https://localhost:3000/api/madlibs')
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
