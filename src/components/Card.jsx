
import './index.css'

export const Card = (props) => {

    const random = Math.floor(1 + Math.random() * 4)

    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${props.mobil.id}?set=set${random}&size=180x180`} alt="ss"/>
            <h1>{props.mobil.name}</h1>
            <p>{props.mobil.email}</p>

        </div>
    )
}


