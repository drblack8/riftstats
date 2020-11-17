export const getRankImg = (tier) => {
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
