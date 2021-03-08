import './../index.css'
import logo from '../loader.svg'

import Card  from './Card'


const Cardlist = ({fromApp,loading}) => {

    const noQuery = " Sorry , cant find what you looking for"
    return (

        <div className={loading ? logo : 'card-list'}  >
        {loading ? <img src={logo} className="logo" alt="logo" /> : 
        fromApp.map(data => <Card key={data.id} robot={data}/>)}
        </div>
    
    )
}

export default Cardlist
