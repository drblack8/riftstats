import React, { useState } from 'react';
import './Summoner.css'
import SearchBar from "../SearchBar/SearchBar";

const Summoner = () => {
    const [summoner, setSummoner] = useState({
        name: 'dan'
    })
    return (
        <div className='sum-page'>
            <div className='sum-page-search'>
                <SearchBar />
            </div>
            <div className='sum-info'>
                <h1>
                    {summoner.name}
                </h1>
            </div>
        </div>
    )
}

export default Summoner;
