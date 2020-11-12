import React, { useEffect, useState } from "react";
import "./Match.css";
import { Queues } from "./Queues";
import { ChampData } from "./ChampData";
import { GetTime } from "./GetTime"

const Match = (props) => {
  const [error, setError] = useState(null);
  const [team1, setTeam1] = useState(null);
  const [team2, setTeam2] = useState(null);
  const [results, setResults] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);


  const winner = (res) => {
    if (res === "Win") {
      return 'VICTORY'
    }
    return 'DEFEAT'
  }

  const getDuration = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    return `${minutes}:${seconds}`;
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
    let current = {};
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
            role: props.match["participants"][i].timeline.role,
            lane: props.match["participants"][i].timeline.lane,
            kda: `${props.match["participants"][i].stats.kills} / ${props.match["participants"][i].stats.deaths} / ${props.match["participants"][i].stats.assists}`,
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
            role: props.match["participants"][i].timeline.role,
            lane: props.match["participants"][i].timeline.lane,
            kda: `${props.match["participants"][i].stats.kills} / ${props.match["participants"][i].stats.deaths} / ${props.match["participants"][i].stats.assists}`,
          });
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
          <div className="queue-type">
            {Queues(props.match.queueId)}
          </div>
          <div className="match-creation">
          {GetTime(props.match.gameCreation)}
          </div>
          <div className={results.win === "Win" ? "victory" : "defeat"}>
            {winner(results.win)}
          </div>
          <div className="duration">{getDuration(props.match.gameDuration)}</div>
        </div>
        <div className="player-info">
          <div className="role">{determineRole(results.role, results.lane)}</div>
          <img className="champion-img" alt="Avatar" src={ChampData(results.champion).imageUrl}/>
        </div>
        <div className="build-info">

        </div>
        <div className="teams">

        </div>


      </div>
    );
  }
};

export default Match;
