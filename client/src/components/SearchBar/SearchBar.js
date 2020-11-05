import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './SearchBar.css'

const SearchBar = () => {
    const [input, setInput] = useState('')
    const history = useHistory()
    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/summoner/userName=${input}`)
    }

    return (
        <form onSubmit={handleSubmit} className='search-div'>
            <input className='search-input' onChange={handleInput} value={input} placeholder="Find a Summoner..."></input>
            <div onClick={handleSubmit} className='button-anchor'><i className='fas fa-search'></i></div>
        </form>
    )
}

export default SearchBar;
