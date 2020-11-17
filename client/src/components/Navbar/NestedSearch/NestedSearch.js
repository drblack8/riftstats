import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './NestedSearch.css'

const NestedSearch = () => {
    const [input, setInput] = useState('')
    const history = useHistory()
    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/summoner/${input}`)
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit} className='nested-search-div'>
            <input className='nested-search-input' onChange={handleInput} value={input} placeholder="Find a Summoner..."></input>
            <div onClick={handleSubmit} className='nested-button-anchor'><i className='fas fa-arrow-alt-circle-right'></i></div>
        </form>
    )
}

export default NestedSearch;
