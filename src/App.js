import React, { useState, useEffect } from 'react'
import Cardlist from './components/Cardlist'
import SearchBox from './components/Searchbox'



const App = () => {

  const [robot, setRobot] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)


  useEffect(() => {

    const fetchData = async () => {

      const timeout = setTimeout(async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json();
        setRobot(data)
        setLoading(false)

      }, 2000);

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
      <SearchBox
        placeholder='cari apa'
        handleChange={handleChange}
      />

     <Cardlist fromApp={dataFilter} loading={loading} data={dataFilter}/>

    </div>
  )
};


export default App;
