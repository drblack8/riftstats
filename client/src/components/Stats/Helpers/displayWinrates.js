import { ChampData } from '../../Match/ChampData';

export const displayWinrates = (matches, summoner) => {
	let win_loss = [0, 0];
	let champion_winrates = {};

	matches.forEach((match) => {
		let champion = 0;
		let participantId = 0;
		let kills = 0;
		let assists = 0;
		let deaths = 0;
		match.participantIdentities.forEach((player) => {
			if (player['player']['summonerName'].toLowerCase() === summoner.toLowerCase()) {
				participantId = player.participantId;
				kills += match.participants[participantId - 1].stats.kills;
				deaths += match.participants[participantId - 1].stats.deaths;
				assists += match.participants[participantId - 1].stats.assists;
				champion += match['participants'][participantId - 1]['championId'];
			}
		});
		let team = null;
		if (participantId <= 5) {
			team = 0;
		} else {
			team = 1;
		}
		if (match['teams'][team]['win'] === 'Win') {
			win_loss[0] += 1;
			if (champion in champion_winrates) {
				champion_winrates[champion][0][0] += 1;
				champion_winrates[champion][1][0] += kills;
				champion_winrates[champion][1][1] += deaths;
				champion_winrates[champion][1][2] += assists;
			} else {
				champion_winrates[champion] = [
					[1, 0, 0],
					[kills, deaths, assists],
				];
			}
		} else {
			win_loss[1] += 1;
			if (champion in champion_winrates) {
				champion_winrates[champion][0][1] += 1;
				champion_winrates[champion][1][0] += kills;
				champion_winrates[champion][1][1] += deaths;
				champion_winrates[champion][1][2] += assists;
			} else {
				champion_winrates[champion] = [
					[0, 1, 0],
					[kills, deaths, assists],
				];
			}
		}
		champion_winrates[champion][0][2] += 1;
	});

	const championArr = Object.entries(champion_winrates).sort((a, b) => b[1][0][2] - a[1][0][2]);
	return {
		championArr: championArr,
		winrateArr: win_loss,
		favoriteChamp: ChampData(championArr[0][0]),
	};
};
