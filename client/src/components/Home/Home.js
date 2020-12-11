import React from 'react'
import Leaderboard from '../Leaderboard/Leaderboard';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {
    return (
        <div>
            <div className="search">
                <SearchBar />
            </div>
            <div className="board">
                <Leaderboard />
            </div>
        </div>

    )
}

export default Home;
