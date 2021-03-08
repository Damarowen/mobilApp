import './../index.css'

import Card  from './Card'


const Cardlist = ({fromApp}) => {

    const noQuery = " Sorry , cant find what you looking for"
    return (
        <div className='card-list'  >
        {fromApp.length > 0 ? fromApp.map(data => <Card key={data.id} robot={data}/>) : noQuery }
        </div>
    )
}

export default Cardlist
