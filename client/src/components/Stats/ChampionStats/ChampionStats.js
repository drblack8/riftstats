import React, { useEffect, useState } from "react";
import { ChampData } from "../../Match/ChampData";
import { displayWinrates } from "../Helpers/displayWinrates";
import "./ChampionStats.css";

const ChampionStats = (props) => {
  const [champArr, setChampArr] = useState([]);
  useEffect(() => {
    const stats = displayWinrates(props.matches, props.summonerName);
    setChampArr(stats.championArr);
    console.log(stats);
  }, [props]);

  const getWR = e => {
    const res = Math.round((e[1][0][0] / e[1][0][2]) * 100)
    if (res >= 65){
      return ['orange', res]
    } else if (res < 65 && res > 54){
      return ['blue', res]
    } else if (res < 44){
      return ['red', res]
    } else  {
      return ['white', res]
    }
  }
  const getKDA = (e) => {
    const res = ((e[1][1][0] + e[1][1][2]) / e[1][1][1]).toFixed(2)
    if (res >= 7) {
      return ['orange',res]
    } else if (res < 7 && res > 2.99) {
      return ['blue',res]
    } else if (res < 1.5) {
      return ['red',res]
    } else {
      return ['white',res]
    }
  }

  return (
    <div>
      <div className="champ-stats-title">
        <span>Champion WR</span>
        <span className="dash"> / </span>
        <span>100 Games</span>
      </div>
      <div className="champ-stats-div">
        {champArr.slice(0, 8).map((el, idx) => {
          return (
            <div key={idx}>
            <div className="champ-stats-child" >
              <div className="champ-stats-img-div">
                <img
                  className="champ-stats-img"
                  src={ChampData(el[0]).imageUrl}
                />
              </div>
              <div className="name-kda">
                <div className="champ-stats-name">{ChampData(el[0]).name}</div>
                <div className={`champ-stats-kda ${getKDA(el)[0]}`}>
                  {getKDA(el)[1]} KDA
                </div>
              </div>
              <div className="wr-total">
                <div className={`champ-stats-wr ${getWR(el)[0]}`}>
                  {getWR(el)[1]}% WR
                </div>
                <div className="total-games-stat">{el[1][0][2]} games</div>
              </div>
            </div>
            {idx < 7 &&
              <div className="stats-divider"></div>
            }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChampionStats;
