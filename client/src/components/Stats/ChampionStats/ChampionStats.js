import React, { useEffect, useState } from "react";
import { displayWinrates } from "../Helpers/displayWinrates";

const ChampionStats = (props) => {
  const [champArr, setChampArr] = useState([]);
  useEffect(() => {
    const stats = displayWinrates(props.matches, props.summonerName);
    setChampArr(stats.championArr);
    console.log(stats);
  }, [props]);

  return (
    <div>
      {champArr.slice(0, 5).map((el, idx) => {
        return (
          <div className="champ-stats-child" key={idx}>
            <div className="champ-stats-img-div"></div>
            <div>{el[0]}</div>
            <div>{Math.round((el[1][0] / el[1][2]) * 100)}%</div>
          </div>
        );
      })}
    </div>
  );
};

export default ChampionStats;
