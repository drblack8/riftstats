import React, { useEffect, useState } from 'react';
import './Stats.css';

const Stats = (props) => {
	const getRankImg = (tier) => {
		if (tier === 'CHALLENGER') {
			return 'https://i.imgur.com/HjSRKj4.png';
		} else if (tier === 'GRANDMASTER') {
			return 'https://i.imgur.com/FSlCdaE.png';
		} else if (tier === 'MASTER') {
			return 'https://i.imgur.com/U4Mbh3A.png';
		} else if (tier === 'DIAMOND') {
			return 'https://i.imgur.com/8CM9rp8.png';
		} else if (tier === 'PLATINUM') {
			return 'https://i.imgur.com/CQmEnd5.png';
		} else if (tier === 'GOLD') {
			return 'https://i.imgur.com/6fZ02WA.png';
		} else if (tier === 'SILVER') {
			return 'https://i.imgur.com/qV73LlH.png';
		} else if (tier === 'BRONZE') {
			return 'https://i.imgur.com/83N0wWM.png';
		} else if (tier === 'IRON') {
			return 'https://i.imgur.com/6JkH1xz.png';
		} else {
			return 'https://i.imgur.com/qw8mc1y.png';
		}
	};

	const getRankTier = (div, tier) => {
		let newDiv = div.slice(1).toLowerCase();
		let firstLetter = div.slice(0, 1);
		let word = firstLetter + newDiv;
		if (div === 'CHALLENGER') {
			return word;
		} else if (div === 'GRANDMASTER') {
			return word;
		} else if (div === 'MASTER') {
			return word;
		} else if (div === 'DIAMOND') {
			return word + ' ' + tier;
		} else if (div === 'PLATINUM') {
			return word + ' ' + tier;
		} else if (div === 'GOLD') {
			return word + ' ' + tier;
		} else if (div === 'SILVER') {
			return word + ' ' + tier;
		} else if (div === 'BRONZE') {
			return word + ' ' + tier;
		} else if (div === 'IRON') {
			return word + ' ' + tier;
		} else {
			return 'Unranked';
		}
	};

	const getClassName = (div) => {
		if (div === 'CHALLENGER') {
			return 'chal';
		} else if (div === 'GRANDMASTER') {
			return 'gm';
		} else if (div === 'MASTER') {
			return 'master';
		} else if (div === 'DIAMOND') {
			return 'diamond';
		} else if (div === 'PLATINUM') {
			return 'plat';
		} else if (div === 'GOLD') {
			return 'gold';
		} else if (div === 'SILVER') {
			return 'silver';
		} else if (div === 'BRONZE') {
			return 'silver';
		} else if (div === 'IRON') {
			return 'iron';
		} else {
			return 'Unranked';
		}
	};

	const winrate = (queue) => {
		let percent = Math.floor(
			(props.ranked[queue].wins / (props.ranked[queue].wins + props.ranked[queue].losses)) * 100
		);
		return `${percent}%`;
	};

	const totalGames = (queue) => {
		return props.ranked[queue].wins + props.ranked[queue].losses;
	};

	return (
		<>
			<div className="ranked-title">
				<p className="ranked-sum">Ranked 2020 Season</p>
			</div>
			<div>
				<div className="soloq-rank">
					<img className="ranked-badge" src={getRankImg(props.ranked[0].tier)} />
					<div className="solo-title titles">Ranked Solo</div>
					<div className="ranked-tier tiers-div">
						<span className={`current-rank-solo actual-tier ${getClassName(props.ranked[0].tier)}`}>
							{getRankTier(props.ranked[0].tier, props.ranked[0].rank)}
						</span>
						<span className="dash"> / </span>
						<span className="league-points"> {props.ranked[0].leaguePoints} LP</span>
					</div>
					<div className="winrate">
						<span className="winrate-percent">{winrate(0)} WR</span>
						<span className="dash"> / </span>
						<span className="total-games"> {totalGames(0)} Games</span>
					</div>
				</div>
				<div className="flex-rank">
					<img className="flex-ranked-badge" src={getRankImg(props.ranked[1].tier)} />
					<div className="flex-solo-title titles">Ranked Flex</div>
					<div className="flex-ranked-tier tiers-div">
						<span className={`flex-current-rank-solo actual-tier ${getClassName(props.ranked[1].tier)}`}>
							{getRankTier(props.ranked[1].tier, props.ranked[1].rank)}
						</span>
						<span className="dash"> / </span>
						<span className="flex-league-points"> {props.ranked[1].leaguePoints} LP</span>
					</div>
					<div className="flex-winrate">
						<span className="flex-winrate-percent">{winrate(1)} WR</span>
						<span className="dash"> / </span>
						<span className="flex-total-games"> {totalGames(1)} Games</span>
					</div>
				</div>
			</div>
			<div className="champions-title"></div>
		</>
	);
};

export default Stats;
