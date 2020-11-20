export const getRankTier = (div, tier) => {
	if (div === null || tier === null) {
		return 'Unranked';
	}
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
