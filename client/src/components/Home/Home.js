import React from 'react'
import Leaderboard from '../Leaderboard/Leaderboard';
import SearchBar from '../SearchBar/SearchBar';
import './Home.css'
import GridLoader from 'react-spinners/GridLoader';

const Home = () => {
    return (
        <div className="home">

            <div className="home-board">
                <Leaderboard />
            </div>
        </div>

    )
}

export default Home;
