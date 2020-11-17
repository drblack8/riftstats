export const winrate = (props, queue) => {
    let percent = Math.floor(
        (props.ranked[queue].wins / (props.ranked[queue].wins + props.ranked[queue].losses)) * 100
    );
    return `${percent}%`;
};
