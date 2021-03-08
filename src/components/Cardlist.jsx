import './../index.css'
import logo from '../loader.svg'

import Card from './Card'


const Cardlist = ({ fromApp, loading, data }) => {
    
    if (!loading && data.length === 0) {
        return <h1> Not find </h1>
    }

    return (
        <div className={loading ? logo : 'card-list'}  >
            {loading ? <img src={logo} alt="logo" /> :
                fromApp.map(data => <Card key={data.id} robot={data} />)}
        </div>

    )
}

export default Cardlist
