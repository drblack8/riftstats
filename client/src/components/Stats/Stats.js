import React from 'react';
import { getClassName } from './Helpers/getClassName';
import { winrate } from './Helpers/winrate';
import { totalGames } from './Helpers/totalGames';
import { getRankImg } from './Helpers/getRankImg';
import { getRankTier } from './Helpers/getRankTier';
import './Stats.css';
import FlexOnly from './FlexOnly';
import SoloOnly from './SoloOnly';
import Unranked from './Unranked';
import ChampionStats from './ChampionStats/ChampionStats';

const Stats = (props) => {
	const rankStatus = (props) => {
		if (props.ranked.length === 0) {
			return 3;
		} else if (props.ranked.length === 1) {
			if (props.ranked[0].queueType === 'RANKED_FLEX_SR') {
				return 4;
			} else if (props.ranked[0].queueType === 'RANKED_SOLO_5x5') {
				return 2;
			}
		} else if (props.ranked.length === 2) {
			return 1;
		}
	};

	if (rankStatus(props) === 4) {
		return <FlexOnly ranked={props.ranked} summonerName={props.summonerName} matches={props.allMatches}/>;
	} else if (rankStatus(props) === 3) {
		return <Unranked summonerName={props.summonerName} matches={props.allMatches}/>;
	} else if (rankStatus(props) === 2) {
		return <SoloOnly ranked={props.ranked} summonerName={props.summonerName} matches={props.allMatches}/>;
	} else if (rankStatus(props) === 1) {
		return (
			<>
				<div className="ranked-title border-shadows dark-bg">
					<p className="ranked-sum">Ranks</p>
				</div>
				<div className="both-ranks border-shadows">
					<div className="soloq-rank">
						<img alt='' className="ranked-badge" src={getRankImg(props.ranked[0].tier)} />
						<div className="solo-title titles">Ranked Solo</div>
						<div className="ranked-tier tiers-div">
							<span className={`current-rank-solo actual-tier ${getClassName(props.ranked[0].tier)}`}>
								{getRankTier(props.ranked[0].tier, props.ranked[0].rank)}
							</span>
							<span className="dash"> / </span>
							<span className="league-points"> {props.ranked[0].leaguePoints} LP</span>
						</div>
						<div className="winrate">
							<span className="winrate-percent">{winrate(props, 0)} WR</span>
							<span className="dash"> / </span>
							<span className="total-games"> {totalGames(props, 0)} Games</span>
						</div>
					</div>
					<div className="div-4-ranks"></div>
					<div className="flex-rank">
						<img alt='' className="flex-ranked-badge" src={getRankImg(props.ranked[1].tier)} />
						<div className="flex-solo-title titles">Ranked Flex</div>
						<div className="flex-ranked-tier tiers-div">
							<span
								className={`flex-current-rank-solo actual-tier ${getClassName(props.ranked[1].tier)}`}
							>
								{props.ranked.length > 1
									? getRankTier(props.ranked[1].tier, props.ranked[1].rank)
									: 'Unranked'}
							</span>
							<span className="dash"> / </span>
							<span className="flex-league-points"> {props.ranked[1].leaguePoints} LP</span>
						</div>
						<div className="flex-winrate">
							<span className="flex-winrate-percent">{winrate(props, 1)} WR</span>
							<span className="dash"> / </span>
							<span className="flex-total-games"> {totalGames(props, 1)} Games</span>
						</div>
					</div>
				</div>
				<div className="champions-title">
					<ChampionStats matches={props.allMatches} summonerName={props.summonerName} />
				</div>
			</>
		);
	}
};

export default Stats;
