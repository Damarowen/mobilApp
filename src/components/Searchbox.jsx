

import './../index.css'

const SearchBox = ({placeholder, handleChange }) => {
    return (
        <input
        className='search-box'
        placeholder={placeholder}
        onChange={handleChange}
        type='search'
      />

    )
 
}

export default SearchBox