import './../index.css'

 const Card = ({robot}) => {

    const random = Math.floor(1 + Math.random() * 4)

    return (
        <div className='card-container'>
            <img src={`https://robohash.org/${robot.id}?set=set${random}&size=180x180`} alt="ss"/>
            <h1>{robot.name}</h1>
            <p>{robot.email}</p>

        </div>
    )
}

export default Card

