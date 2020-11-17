export const getClassName = (div) => {
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
