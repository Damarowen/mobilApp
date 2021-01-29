import './index.css'
import { Card } from './Card'


export const Cardlist = (props) => {

    return (
        <div className='card-list'>
          {props.fromApp.map(x => 
          <Card key={x.id} mobil={x}/> 
           )}
        </div>
    )
}
