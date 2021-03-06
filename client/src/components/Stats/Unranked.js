import React from 'react';
import { getClassName } from './Helpers/getClassName';
import { getRankTier } from './Helpers/getRankTier';
import { getRankImg } from './Helpers/getRankImg';
import './Stats.css';
import ChampionStats from './ChampionStats/ChampionStats';

const Unranked = (props) => {
	return (
		<>
			<div className="ranked-title border-shadows dark-bg">
				<p className="ranked-sum">Ranks</p>
			</div>
			<div className="both-ranks border-shadows">
				<div className="soloq-rank">
					<img alt="" className="ranked-badge" src={getRankImg(null)} />
					<div className="solo-title titles">Ranked Solo</div>
					<div className="ranked-tier tiers-div">
						<span className={`current-rank-solo actual-tier ${getClassName(null)}`}>
							{getRankTier(null)}
						</span>
						<span className="dash"> / </span>
						<span className="league-points">0 LP</span>
					</div>
					<div className="winrate">
						<span className="winrate-percent">0% WR</span>
						<span className="dash"> / </span>
						<span className="total-games">0 Games</span>
					</div>
				</div>
				<div className="div-4-ranks"></div>
				<div className="flex-rank">
					<img alt="" className="flex-ranked-badge" src={getRankImg(null)} />
					<div className="flex-solo-title titles">Ranked Flex</div>
					<div className="flex-ranked-tier tiers-div">
						<span className={`flex-current-rank-solo actual-tier ${getClassName(null)}`}>
							{getRankTier(null, null)}
						</span>
						<span className="dash"> / </span>
						<span className="flex-league-points">0 LP</span>
					</div>
					<div className="flex-winrate">
						<span className="flex-winrate-percent">0% WR</span>
						<span className="dash"> / </span>
						<span className="flex-total-games">0 Games</span>
					</div>
				</div>
			</div>
			<div className="champions-title">
			<ChampionStats matches={props.matches} summonerName={props.summonerName} />
			</div>
		</>
	);
};

export default Unranked;
