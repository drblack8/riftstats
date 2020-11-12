import React, { useEffect, useState } from "react";
import "./Match.css";
import { Queues } from "./Queues";

const Match = (props) => {
  const [error, setError] = useState(null);
  const [team1, setTeam1] = useState(null);
  const [team2, setTeam2] = useState(null);
  const [results, setResults] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  let championByIdCache = {};
  let championJson = {};

  const determineRole = (role, lane) => {
    if (lane === "TOP") {
      return "Top";
    } else if (lane === "JUNGLE") {
      return "Jungle";
    } else if (lane === "MID") {
      return "Mid";
    } else if (role === "DUO_CARRY") {
      return "ADC";
    } else if (role === "DUO_SUPPORT") {
      return "Support";
    }
    return "Fill";
  };

  async function getLatestChampionDDragon(language = "en_US") {
    if (championJson[language]) return championJson[language];
    let response;
    let versionIndex = 0;
    do {
      const version = (
        await fetch(
          "http://ddragon.leagueoflegends.com/api/versions.json"
        ).then(async (r) => await r.json())
      )[versionIndex++];
      response = await fetch(
        `http://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/champion.json`
      );
    } while (!response.ok);
    championJson[language] = await response.json();
    return championJson[language];
  }
  async function getChampionByKey(key, language = "en_US") {
    if (!championByIdCache[language]) {
      let json = await getLatestChampionDDragon(language);
      championByIdCache[language] = {};
      for (var championName in json.data) {
        if (!json.data.hasOwnProperty(championName)) continue;

        const champInfo = json.data[championName];
        championByIdCache[language][champInfo.key] = champInfo;
      }
    }
    return championByIdCache[language][key];
  }

  useEffect(() => {
    let t1 = [];
    let t2 = [];
    let current = {};
    for (let i = 0; i < 10; i++) {
      if (i < 5) {
        let champ = null;
        getChampionByKey(props.match["participants"][i].championId).then(
          (res) => {
            champ = res;
            if (
              props.match["participantIdentities"][
                i
              ].player.summonerName.toLowerCase() ==
              props.summoner.toLowerCase()
            ) {
              setResults({
                name:
                  props.match["participantIdentities"][i].player.summonerName,
                win: props.match.teams[0].win,
                champion: champ,
                role: props.match["participants"][i].timeline.role,
                lane: props.match["participants"][i].timeline.lane,
                kda: `${props.match["participants"][i].stats.kills} / ${props.match["participants"][i].stats.deaths} / ${props.match["participants"][i].stats.assists}`
              });
              t1.push({
                user: true,
                name:
                  props.match["participantIdentities"][i].player.summonerName,
                champion: champ,
                team: 1,
                role: props.match["participants"][i].timeline.role,
                lane: props.match["participants"][i].timeline.lane,
                kda: `${props.match["participants"][i].stats.kills} / ${props.match["participants"][i].stats.deaths} / ${props.match["participants"][i].stats.assists}`
              });
            } else {
              t1.push({
                name:
                  props.match["participantIdentities"][i].player.summonerName,
                champion: champ,
                team: 1,
                role: props.match["participants"][i].timeline.role,
                lane: props.match["participants"][i].timeline.lane,
                kda: `${props.match["participants"][i].stats.kills} / ${props.match["participants"][i].stats.deaths} / ${props.match["participants"][i].stats.assists}`
              });
            }
          }
        );
      } else if (i >= 5) {
        let champ = null;
        getChampionByKey(props.match["participants"][i].championId).then(
          (res) => {
            champ = res;
            if (
              props.match["participantIdentities"][
                i
              ].player.summonerName.toLowerCase() ==
              props.summoner.toLowerCase()
            ) {
              setResults({
                name: props.match["participantIdentities"][i].player.summonerName,
                win: props.match.teams[1].win,
                champion: champ,
                role: props.match["participants"][i].timeline.role,
                lane: props.match["participants"][i].timeline.lane,
                kda: `${props.match["participants"][i].stats.kills} / ${props.match["participants"][i].stats.deaths} / ${props.match["participants"][i].stats.assists}`

              });
              t2.push({
                user: true,
                name:
                  props.match["participantIdentities"][i].player.summonerName,
                champion: champ,
                team: 2,
                role: props.match["participants"][i].timeline.role,
                lane: props.match["participants"][i].timeline.lane,
                kda: `${props.match["participants"][i].stats.kills} / ${props.match["participants"][i].stats.deaths} / ${props.match["participants"][i].stats.assists}`
              });
            } else {
              t2.push({
                name:
                  props.match["participantIdentities"][i].player.summonerName,
                champion: champ,
                team: 2,
                role: props.match["participants"][i].timeline.role,
                lane: props.match["participants"][i].timeline.lane,
                kda: `${props.match["participants"][i].stats.kills} / ${props.match["participants"][i].stats.deaths} / ${props.match["participants"][i].stats.assists}`
              });
            }
          }
        );
      }
    }
    setTeam1(t1);
    setTeam2(t2);
    setIsLoaded(true);
  }, [isLoaded]);

  if (error) {
    console.log("Error: ", error.message);
    return <div className="no-sum">No results</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className={(results.win === 'Win') ? "solo-match" : 'solo-match-lost'}>
        <div className="queue-type">
          {Queues(props.match.queueId)}
        </div>
        <div className="role">
          {determineRole(results.role, results.lane)}
        </div>
        <div className="champion">{results.champion.name}</div>
      </div>
    );
  }
};

export default Match;
