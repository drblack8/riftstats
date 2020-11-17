export const totalGames = (props, queue) => {
    return props.ranked[queue].wins + props.ranked[queue].losses;
};
