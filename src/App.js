import React, { Component } from 'react'
import { Cardlist } from './components/Cardlist'
import './App'


class App extends Component {
  constructor() {
    super();

    this.state = {
      mobil: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ mobil: users }))
  }


  render() {
    return (
      <div className="App">
        <Cardlist fromApp={this.state.mobil}/>
              </div>
    )
  };
}

export default App;
