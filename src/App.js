import React, { Component } from 'react'
import * as ReactBootStrap from 'react-bootstrap'

//* below is using destructured
import { Cardlist } from './components/Cardlist'

//* below is using export function
import { SearchBox } from './components/Searchbox'

import './App.css'


class App extends Component {
  constructor() {
    super();


    this.state = {
      mobil: [],
      searchField: '',
      loading: false
    }
  }

  //* ini akan jalan setelah constructor dan render phase
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ mobil: users }))
       this.setState({ loading: true})
  }

  onChange = (e) => {
    //* this merujuk ke App
    this.setState({ searchField: e.target.value })

  }

 


  render() {

    const { mobil, searchField, loading} = this.state
    const dataFilter = mobil.filter(x => x.name.toLowerCase().includes(searchField.toLowerCase()))
 

    return (
      <div className="App">
        <h1> Robot Database </h1>
        {/* {this.state.loading ? <ReactBootStrap.Spinner animation='border'/> : ""} */}
        <SearchBox
          placeholder='cari apa'
          berubah={this.onChange}
        />

        <Cardlist fromApp={dataFilter}/>
      </div>
    )
  };
}

export default App;
