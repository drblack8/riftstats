import React, { useEffect, useState } from "react";
import "./Match.css";
import { Queues } from "./Queues";
import { ChampData } from "./ChampData";
import { GetTime } from "./GetTime";
import { Spells } from "./Spells";
import { Keystones } from "./Keystones";

const Match = (props) => {
  const [error, setError] = useState(null);
  const [team1, setTeam1] = useState(null);
  const [team2, setTeam2] = useState(null);
  const [results, setResults] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const winner = (res) => {
    if (res === "Win") {
      return "VICTORY";
    }
    return "DEFEAT";
  };

  const getDuration = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return `${minutes}:${seconds}`;
  };

  const getItem = (key) => {
    if (key === 0) {
      return "https://i.imgur.com/ecL2A5y.png";
    } else {
      return `http://ddragon.leagueoflegends.com/cdn/10.23.1/img/item/${key}.png`;
    }
  };

  const determineRole = (role, lane) => {
    if (lane === "TOP") {
      return "Top";
    } else if (lane === "JUNGLE") {
      return "Jungle";
    } else if (lane === "MIDDLE") {
      return "Mid";
    } else if (role === "DUO_CARRY") {
      return "ADC";
    } else if (role === "DUO_SUPPORT") {
      return "Support";
    }
    return "Fill";
  };

  useEffect(() => {
    setIsLoaded(false);
    let t1 = [];
    let t2 = [];
    let t1Kills = 0;
    let t2Kills = 0;

    for (let i = 0; i < 10; i++) {
      if (i < 5) {
        t1Kills += props.match["participants"][i].stats.kills;
      } else {
        t2Kills += props.match["participants"][i].stats.kills;
      }
    }
    for (let i = 0; i < 10; i++) {
      if (i < 5) {
        if (
          props.match["participantIdentities"][
            i
          ].player.summonerName.toLowerCase() == props.summoner.toLowerCase()
        ) {
          setResults({
            name: props.match["participantIdentities"][i].player.summonerName,
            win: props.match.teams[0].win,
            champion: props.match["participants"][i].championId,
            spell1: props.match["participants"][i].spell1Id,
            spell2: props.match["participants"][i].spell2Id,
            keystone: props.match["participants"][i].stats.perk0,
            tree: props.match["participants"][i].stats.perkSubStyle,
            level: props.match["participants"][i].spell2Id,
            items: {
              item0: props.match["participants"][i].stats.item0,
              item1: props.match["participants"][i].stats.item1,
              item2: props.match["participants"][i].stats.item2,
              item3: props.match["participants"][i].stats.item3,
              item4: props.match["participants"][i].stats.item4,
              item5: props.match["participants"][i].stats.item5,
              ward: props.match["participants"][i].stats.item6,
            },
            farm:
              props.match["participants"][i].stats.totalMinionsKilled +
              props.match["participants"][i].stats.neutralMinionsKilled,
            farmpm: (
              (props.match["participants"][i].stats.totalMinionsKilled +
                props.match["participants"][i].stats.neutralMinionsKilled) /
              (props.match.gameDuration / 60)
            ).toFixed(1),
            kp: (
              ((props.match["participants"][i].stats.kills +
                props.match["participants"][i].stats.assists) /
                t1Kills) *
              100
            ).toFixed(0),
            multikill: props.match["participants"][i].stats.largestMultiKill,
            role: props.match["participants"][i].timeline.role,
            lane: props.match["participants"][i].timeline.lane,
            kills: props.match["participants"][i].stats.kills,
            assists: props.match["participants"][i].stats.assists,
            deaths: props.match["participants"][i].stats.deaths,
            vscore: props.match["participants"][i].stats.visionScore,
            kda:
              (props.match["participants"][i].stats.kills +
                props.match["participants"][i].stats.assists) /
              props.match["participants"][i].stats.deaths,
          });
          t1.push({
            user: true,
            name: props.match["participantIdentities"][i].player.summonerName,
            champion: props.match["participants"][i].championId,
            team: 1,
            role: props.match["participants"][i].timeline.role,
            lane: props.match["participants"][i].timeline.lane,
            kda: `${props.match["participants"][i].stats.kills} / ${props.match["participants"][i].stats.deaths} / ${props.match["participants"][i].stats.assists}`,
          });
        } else {
          t1.push({
            name: props.match["participantIdentities"][i].player.summonerName,
            champion: props.match["participants"][i].championId,
            team: 1,
            role: props.match["participants"][i].timeline.role,
            lane: props.match["participants"][i].timeline.lane,
            kda: `${props.match["participants"][i].stats.kills} / ${props.match["participants"][i].stats.deaths} / ${props.match["participants"][i].stats.assists}`,
          });
        }
      } else if (i >= 5) {
        if (
          props.match["participantIdentities"][
            i
          ].player.summonerName.toLowerCase() == props.summoner.toLowerCase()
        ) {
          setResults({
            name: props.match["participantIdentities"][i].player.summonerName,
            win: props.match.teams[1].win,
            champion: props.match["participants"][i].championId,
            spell1: props.match["participants"][i].spell1Id,
            spell2: props.match["participants"][i].spell2Id,
            keystone: props.match["participants"][i].stats.perk0,
            tree: props.match["participants"][i].stats.perkSubStyle,
            level: props.match["participants"][i].spell2Id,
            items: {
              item0: props.match["participants"][i].stats.item0,
              item1: props.match["participants"][i].stats.item1,
              item2: props.match["participants"][i].stats.item2,
              item3: props.match["participants"][i].stats.item3,
              item4: props.match["participants"][i].stats.item4,
              item5: props.match["participants"][i].stats.item5,
              ward: props.match["participants"][i].stats.item6,
            },
            farm:
              props.match["participants"][i].stats.totalMinionsKilled +
              props.match["participants"][i].stats.neutralMinionsKilled,
            farmpm: (
              (props.match["participants"][i].stats.totalMinionsKilled +
                props.match["participants"][i].stats.neutralMinionsKilled) /
              (props.match.gameDuration / 60)
            ).toFixed(1),
            kp: (
              ((props.match["participants"][i].stats.kills +
                props.match["participants"][i].stats.assists) /
                t2Kills) *
              100
            ).toFixed(0),
            multikill: props.match["participants"][i].stats.largestMultiKill,
            role: props.match["participants"][i].timeline.role,
            lane: props.match["participants"][i].timeline.lane,
            kills: props.match["participants"][i].stats.kills,
            assists: props.match["participants"][i].stats.assists,
            deaths: props.match["participants"][i].stats.deaths,
            vscore: props.match["participants"][i].stats.visionScore,
            kda:
              (props.match["participants"][i].stats.kills +
                props.match["participants"][i].stats.assists) /
              props.match["participants"][i].stats.deaths,
          });
          // console.log(Spells(results.spell1));
          t2.push({
            user: true,
            name: props.match["participantIdentities"][i].player.summonerName,
            champion: props.match["participants"][i].championId,
            team: 2,
            role: props.match["participants"][i].timeline.role,
            lane: props.match["participants"][i].timeline.lane,
            kda: `${props.match["participants"][i].stats.kills} / ${props.match["participants"][i].stats.deaths} / ${props.match["participants"][i].stats.assists}`,
          });
        } else {
          t2.push({
            name: props.match["participantIdentities"][i].player.summonerName,
            champion: props.match["participants"][i].championId,
            team: 2,
            role: props.match["participants"][i].timeline.role,
            lane: props.match["participants"][i].timeline.lane,
            kda: `${props.match["participants"][i].stats.kills} / ${props.match["participants"][i].stats.deaths} / ${props.match["participants"][i].stats.assists}`,
          });
        }
      }
    }

    setTeam1(t1);
    setTeam2(t2);
    setIsLoaded(true);
  }, [isLoaded]);

  if (error && !isLoaded) {
    console.log("Error: ", error.message);
    return <div className="no-sum">No results</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (isLoaded) {
    return (
      <div className={results.win === "Win" ? "solo-match" : "solo-match-lost"}>
        <div className="match-info">
          <div className="queue-type">{Queues(props.match.queueId)}</div>
          <div className="match-creation">
            {GetTime(props.match.gameCreation)}
          </div>
          <div className={results.win === "Win" ? "victory" : "defeat"}>
            {winner(results.win)}
          </div>
          <div className="duration">
            {getDuration(props.match.gameDuration)}
          </div>
        </div>
        <div className="divider"></div>
        <div className="player-info">
          {/* <div className="role">{determineRole(results.role, results.lane)}</div> */}
          <img
            className="champion-img"
            alt="Avatar"
            src={ChampData(results.champion).imageUrl}
          />
          <div className="spells">
            <img className="spell-1" alt="Spell" src={Spells(results.spell1)} />
            <img className="spell-2" alt="Spell" src={Spells(results.spell2)} />
          </div>
          <div className="player-runes">
            <div className="rune-keystone">
              <img
                className="rune-keystone-img"
                src={Keystones(results.keystone)}
              />
            </div>
            <div className="rune-tree">
              <img className="rune-tree-img" src={Keystones(results.tree)} />
            </div>
          </div>
          <div className="player-stats">
            <div className="score">
              <span>{results.kills} / </span>
              <span className="deaths">{results.deaths}</span>
              <span> / {results.assists}</span>
            </div>
            <div className="kda-math">
              <span
                className={
                  results.kda > 4
                    ? "kda-blue"
                    : results.kda < 1.5
                    ? "kda-red"
                    : "kda-white"
                }
              >
                {results.kda === Infinity
                  ? `${((results.kills + results.assists) / 1).toFixed(2)} `
                  : `${results.kda.toFixed(2)} `}
              </span>
              <span className="kda-math-text">KDA</span>
            </div>
          </div>
          <div className="player-level">
            <div>Level {results.level}</div>
            <div>
              <span>{results.farm}</span>
              <span> ({results.farmpm}) </span>
              <span>CS</span>
            </div>
            <div>
              <span>KP: </span>
              <span>{results.kp}%</span>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="build-info">
          <img
            className="item1"
            src={getItem(results.items.item0)}
            alt="Item"
          />
          <img
            className="item2"
            src={getItem(results.items.item1)}
            alt="Item"
          />
          <img
            className="item3"
            src={getItem(results.items.item3)}
            alt="Item"
          />
          <img
            className="item4"
            src={getItem(results.items.item2)}
            alt="Item"
          />
          <img
            className="item5"
            src={getItem(results.items.item4)}
            alt="Item"
          />
          <img
            className="item6"
            src={getItem(results.items.item5)}
            alt="Item"
          />
          <img className="ward" src={getItem(results.items.ward)} alt="Item" />
        </div>
        <div className="divider"></div>
        <div className="teams">
          <div className="team1">
            <ul className="team-ul">
              {team1.map((el, idx) => {
                return (
                  <li key={idx} className={`li1-${idx}`}>
                    <span>
                      <img
                        className="team-imgs"
                        src={ChampData(el.champion).imageUrl}
                      />
                    </span>
                    <span className="team-text"> {el.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="team2">
            <ul className="team-ul">
              {team2.map((el, idx) => {
                return (
                  <li key={idx} className={`li2-${idx}`}>
                    <span>
                      <img
                        className="team-imgs"
                        src={ChampData(el.champion).imageUrl}
                      />
                    </span>
                    <span className="team-text"> {el.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Match;
