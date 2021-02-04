import './index.css'
import { Card } from './Card'


export const Cardlist = (props) => {

    const noQuery = " Sorry , cant find what you looking for"
    return (
        <div className='card-list'  >
        {props.fromApp.length > 0 ? props.fromApp.map(x => <Card key={x.id} mobil={x}/>) : noQuery }
        </div>
    )
}
