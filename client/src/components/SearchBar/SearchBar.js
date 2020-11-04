import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './SearchBar.css'

const SearchBar = () => {
    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = () => {
        console.log(input);
    }

    return (
        <div className='search-div'>
            <input className='search-input' onChange={handleInput} value={input} placeholder="Find a Summoner..."></input>
            <NavLink href='#' className='button-anchor'><i onClick={handleSubmit} className='fas fa-search'></i></NavLink>
        </div>
    )
}

export default SearchBar;
