import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Leaderboard.css';
import GridLoader from 'react-spinners/GridLoader';

const Leaderboard = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);
	const [ranks, setRanks] = useState([]);
	const history = useHistory();

	useEffect(() => {
		setIsLoaded(false);
		fetch(`/api/leaderboard/current`)
			.then((res) => res.json())
			.then(
				(result) => {
					setRanks(result);
					setIsLoaded(true)
				},
				(error) => {
					setError({ first: error });
					setIsLoaded(true);
				}
			);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e.target.id);
		console.log(e.target);
		history.push(`/summoner/${e.target.id}`);
	};

	if (!isLoaded) {
		return (
			<div className="loading">
				<GridLoader height={100} color="#ffffff" />
			</div>
		);
	} else {
	return (
		<>
		<div className='home-search border-shadows'>
                <h1 className='chal-title'>Challenger Rankings</h1>
        </div>
		<div className="leaderboard">
			<div className="rank-list border-shadows">
				{ranks.map((el, idx) => (
                    <>
					<div className="single-rank" id={idx} key={idx}>
						<div className="chal-rank">{idx + 1}.</div>
						<div className="chal-icon">
							<img
								className="chal-img"
								src={`https://raw.communitydragon.org/11.23/game/assets/ux/summonericons/profileicon${el['profileIcon']}.png`}
								alt="Profile"
							/>
						</div>
						<div className="chal-name">{el['name']}</div>
						<div className="chal-lp">
                            <span className='leaguePoints'>{el['leaguePoints']}</span>
                            <span className='misc'> LP</span>
                            </div>
						<div className="chal-stats">
							<span className="chal-wr">
								{Math.round((el['wins'] / (el['wins'] + el['losses'])) * 100)}% WR
							</span>
							<span className="dash"> / </span>
							<span className="chal-games">{el['wins'] + el['losses']} Games</span>
						</div>
							<Button id={el['name']} onClick={handleSubmit}>
								Stats
							</Button>
					</div>
                    {idx < ranks.length - 1 &&
                        <div className="chal-divider"></div>
                    }
                    </>
				))}
			</div>
		</div>
		</>
	);
	}
};

export default Leaderboard;
