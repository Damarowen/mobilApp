import React, { useState, useEffect } from 'react'
import Cardlist from './components/Cardlist'
import SearchBox from './components/Searchbox'



const App = () => {

  const [robot, setRobot] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)


 

  useEffect(() => {

   const fetchData = () => {
    setLoading(true)

    const delay = Math.floor(Math.random() * 1000) + 200;

    const timeout = setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setRobot(users))
      setLoading(false)

    }, delay);
  
    return timeout
  }

   fetchData()

  }, [])

  const handleChange = ({ target }) => {
    setSearch(target.value)
  }

  //* search has been update with setSEARCH
  const dataFilter = robot.filter(x => x.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="App">
      <h1> Robot Database </h1>
      {/* {this.state.loading ? <ReactBootStrap.Spinner animation='border'/> : ""} */}
      <SearchBox
        placeholder='cari apa'
        handleChange={handleChange}
      />

      <Cardlist fromApp={dataFilter} loading={loading}/>
    </div>
  )
};


export default App;
