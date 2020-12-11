import React from 'react'
import Leaderboard from '../Leaderboard/Leaderboard';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className='home-search'>
                <h1>Challenger Rankings</h1>
            </div>
            <div className="home-board">
                <Leaderboard />
            </div>
        </div>

    )
}

export default Home;
