import React, { Component } from 'react'
import './App.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
      mobil: [
        {
          id: '1',
          nama: 'Honda'
        },
        {
          id: '2',
          nama: 'Suzuki'
        },
        {
          id: '3',
          nama: 'Mitsubishi'
        }
      ]
    }
  }


  render() {
    return (

      <div className="App">
        {this.state.mobil.map(x => (<h1 key={x.id}> {x.nama}</h1>))}
      </div>
    )
  };
}

export default App;
