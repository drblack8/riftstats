import React, { useState } from 'react'

const SearchBar = () => {
    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className='search-div'>
            <input className='search-imput' onChange={handleInput} value={input} placeholder="Find a Summoner..."></input>
        </div>
    )
}

export default SearchBar;
