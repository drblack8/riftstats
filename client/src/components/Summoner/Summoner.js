import React, { useEffect, useState } from 'react';
import './Summoner.css'
import SearchBar from "../SearchBar/SearchBar";

const Summoner = () => {
    const [summoner, setSummoner] = useState(null)
    const [url, setUrl] = useState(null)
    useEffect(() => {
        setUrl(window.location.href.split('userName=')[1])
        console.log(url);
        const data = fetch(`/api/summoner/userName=${url}`)

    }, [null])
    return (
        <div className='sum-page'>
            <div className='sum-page-search'>
                <SearchBar />
            </div>
            <div className='sum-info'>
                <h1>
                    {/* {summoner.name} */} wat
                </h1>
            </div>
        </div>
    )
}

export default Summoner;
