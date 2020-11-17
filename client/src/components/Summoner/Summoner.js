import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader"
import Match from '../Match/Match';
import { UpdButton } from './UpdButton/UpdButton';
import Stats from '../Stats/Stats';
import './Summoner.css';

const Summoner = (props) => {
	const [error, setError] = useState(null);
	const [summoner, setSummoner] = useState('');
	const [issue, setIssue] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
  const [profileIcon, setProfileIcon] = useState(4803);
  const [buttonLoading, setButtonLoading] = useState(false)
	const [summonerLevel, setSummonerLevel] = useState(30);
	const [rankedData, setRankedData] = useState([{}, {}]);
	const [matches, setMatches] = useState([]);
	let { input } = useParams();

	useEffect(() => {
		setIsLoaded(false);
		fetch(`/api/summoner/info/${input}`)
			.then((res) => res.json())
			.then(
				(result) => {
					console.log(result);
					if (result === 'Summoner Not Found') {
						setIssue(true);
						setIsLoaded(true);
					}
					setMatches(result.matchList);
					setSummoner(result.sumName);
					setProfileIcon(result.profileIcon);
					setRankedData(result.rankedInfo);
					setSummonerLevel(result.summonerLevel);
					setIsLoaded(true);
				},
				(error) => {
					setError({ first: error });
					setIsLoaded(true);
				}
			);
	}, [input]);

	const handleUpdate = () => {
    setButtonLoading(true)
		fetch(`/api/match/post/${input}`)
			.then((res) => res.json())
			.then(
				(result) => {
					console.log(result);
          setMatches(result);
          setButtonLoading(false)
				},
				(error) => {
					setError({ second: error });
				}
			);
	};

	if (error) {
		console.log('Error: ', error.message);
		return (
			<div className="sum-page">
				<div className="sum-page-search"></div>
				<div className="no-sum">No results for {input}</div>
			</div>
		);
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else if (issue) {
		return (
			<div className="issue-main">
				<div className="issue-message">
					<p>Summoner: [{input.toUpperCase()}] Does Not Exist.</p>
					<p>Please try searching again.</p>
				</div>
				<div className="issue-search"></div>
			</div>
		);
	} else if (isLoaded && matches.length === 0) {
		return (
			<div className="alert-sumpage">
				<div className="alert-name">Welcome to RiftStats {summoner}!</div>
				<div className="alert-icon">
				<i class="fas fa-exclamation-triangle fa-10x"></i>
				</div>
				<div className="alert-message">
					<p>We found you but we need to get you in the system first</p>
					<p>so please hit the update button above!</p>
				</div>
				<div className="alert-update">
					<UpdButton disabled={buttonLoading} onClick={handleUpdate}>{buttonLoading ? <ScaleLoader height={15} color="#ffffff" /> : "Update"}</UpdButton>
				</div>
			</div>
		);
	} else if (isLoaded) {
		return (
			<div className="sum-page">
				<div className="sum-header">
					<div className="sum-search-title">Welcome to your Stats Page!</div>
					<div className="sum-page-search"></div>
				</div>

				<div className="sum-matches-title">
					<p className="title-text">Below are your last 20 matches. Sort funtionality coming soon!</p>
				</div>
				<div className="sum-icon">
					<div className="img-container">
						<img className="top-img" src="https://i.imgur.com/phgH52r.png" alt="Profile" />
						<img
							className="bottom-img"
							src={`https://raw.communitydragon.org/10.23/game/assets/ux/summonericons/profileicon${profileIcon}.png`}
							alt="Profile"
						/>
						<p className="sum-level">{summonerLevel}</p>
					</div>
				</div>

				<div className="sum-name">{summoner}</div>
				<div className="update-btn">
					<UpdButton disabled={buttonLoading} onClick={handleUpdate}>{buttonLoading ? <ScaleLoader height={15} color="#ffffff" /> : "Update"}</UpdButton>
				</div>
				<div className="sum-stats">
					<Stats ranked={rankedData} />
				</div>
				<div className="sum-matches">
					<ul>
						{matches.map((match, idx) => {
							return (
								<li key={idx}>
									<Match match={match} summoner={summoner} />
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
};

export default Summoner;
