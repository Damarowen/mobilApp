import React, { Component } from 'react'

//* below is using destructured
import { Cardlist } from './components/Cardlist'

//* below is using export function
import Searchbox  from './components/Searchbox'

import './App.css'


class App extends Component {
  constructor() {
    super();

    this.state = {
      mobil: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ mobil: users }))
  }


  render() {

    const { mobil, searchField } = this.state
    const dataFilter = mobil.filter(x => x.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1> Robot Database </h1>
        <Searchbox 
            placeholder='cari apa'
            berubah={e => this.setState({ searchField: e.target.value})}

        />
        <Cardlist fromApp={dataFilter }/>
              </div>
    )
  };
}

export default App;
