import './index.css'



function Searchbox ({ placeholder, berubah })  {
    return (
            <input className='search'
                //* placeholder dynamic
                type="search" placeholder={placeholder} onChange={berubah} />

    )
}

export default Searchbox


