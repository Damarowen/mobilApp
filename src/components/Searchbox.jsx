
import './index.css'

export const SearchBox = props => {
    return (
        <input
        className='search-box'
        placeholder={props.placeholder}
        onChange={props.berubah}
        type='search'
      />

    )
 
}

