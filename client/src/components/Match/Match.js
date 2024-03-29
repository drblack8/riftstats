import React, { useEffect, useState } from "react";
import "./Match.css";
import { Queues } from "./Queues";
import { ChampData } from "./ChampData";
import { GetTime } from "./GetTime";
import { Spells } from "./Spells";
import { Keystones } from "./Keystones";
import { useHistory } from 'react-router-dom'

const Match = (props) => {
  const [team1, setTeam1] = useState(null);
  const [team2, setTeam2] = useState(null);
  const [results, setResults] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const history = useHistory()

  const winner = (res) => {
    if (res === true) {
      return "VICTORY";
    }
    return "DEFEAT";
  };

  const getDuration = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    if (((`${seconds}`).length < 2)) {
      return `${minutes}:0${seconds}`
    }
    return `${minutes}:${seconds}`;
  };

  const getItem = (key) => {
    if (key === 0) {
      return "https://i.imgur.com/ecL2A5y.png";
    }
    if (8001 > key && key > 6996) {
      return 'http://ddragon.leagueoflegends.com/cdn/10.23.1/img/champion/Ornn.png'
    }
    else if (props.match.gameCreation > 1605140418000) {
      return `https://ddragon.leagueoflegends.com/cdn/11.23.1/img/item/${key}.png`;
    } else {
      return `https://i.imgur.com/ecL2A5y.png`
    }
  };

  const handleSubmit = (e) => {
	e.preventDefault()
	history.push(`/summoner/${e.target.id}`)
}

  useEffect(() => {
    setIsLoaded(false);
    let t1 = [];
    let t2 = [];
    let t1Kills = 0;
    let t2Kills = 0;

    for (let i = 0; i < 10; i++) {
      if (i < 5) {
        t1Kills += props.match["participants"][i].kills;
      } else {
        t2Kills += props.match["participants"][i].kills;
      }
    }
    for (let i = 0; i < 10; i++) {
      if (i < 5) {
        if (
          props.match["participantIdentities"][
            i
          ].player.summonerName.toLowerCase() === props.summoner.toLowerCase()
        ) {
          console.log(props.match["participants"][i].perks.styles[0].style);
          setResults({
			      name: props.match["participantIdentities"][i].player.summonerName,
			      short: props.match["participantIdentities"][i].player.summonerName.substring(0, 9) +"...",
            win: props.match.teams[0].win,
            champion: props.match["participants"][i].championId,
            spell1: props.match["participants"][i].summoner1Id,
            spell2: props.match["participants"][i].summoner2Id,
            keystone: props.match["participants"][i].perks.styles[0].style,
            tree: props.match["participants"][i].perks.styles[1].style,
            level: props.match["participants"][i].summoner2Id,
            items: {
              item0: props.match["participants"][i].item0,
              item1: props.match["participants"][i].item1,
              item2: props.match["participants"][i].item2,
              item3: props.match["participants"][i].item3,
              item4: props.match["participants"][i].item4,
              item5: props.match["participants"][i].item5,
              ward: props.match["participants"][i].item6,
            },
            farm:
              props.match["participants"][i].totalMinionsKilled +
              props.match["participants"][i].neutralMinionsKilled,
            farmpm: (
              (props.match["participants"][i].totalMinionsKilled +
                props.match["participants"][i].neutralMinionsKilled) /
              (props.match.gameDuration / 60)
            ).toFixed(1),
            kp: (
              ((props.match["participants"][i].kills +
                props.match["participants"][i].assists) /
                t1Kills) *
              100
            ).toFixed(0),
            multikill: props.match["participants"][i].largestMultiKill,
            role: props.match["participants"][i].role,
            lane: props.match["participants"][i].lane,
            kills: props.match["participants"][i].kills,
            assists: props.match["participants"][i].assists,
            deaths: props.match["participants"][i].deaths,
            vscore: props.match["participants"][i].visionScore,
            kda:
              (props.match["participants"][i].kills +
                props.match["participants"][i].assists) /
              props.match["participants"][i].deaths,
          });
          t1.push({
            user: true,
			name: props.match["participantIdentities"][i].player.summonerName,
			short: props.match["participantIdentities"][i].player.summonerName.substring(0, 9) +"...",
            champion: props.match["participants"][i].championId,
            team: 1,
            role: props.match["participants"][i].role,
            lane: props.match["participants"][i].lane,
            kda: `${props.match["participants"][i].kills} / ${props.match["participants"][i].deaths} / ${props.match["participants"][i].assists}`,
          });
        } else {
          t1.push({
			name: props.match["participantIdentities"][i].player.summonerName,
			short: props.match["participantIdentities"][i].player.summonerName.substring(0, 9) +"...",
            champion: props.match["participants"][i].championId,
            team: 1,
            role: props.match["participants"][i].role,
            lane: props.match["participants"][i].lane,
            kda: `${props.match["participants"][i].kills} / ${props.match["participants"][i].deaths} / ${props.match["participants"][i].assists}`,
          });
        }
      } else if (i >= 5) {
        if (
          props.match["participantIdentities"][
            i
          ].player.summonerName.toLowerCase() === props.summoner.toLowerCase()
        ) {
          setResults({
			      name: props.match["participantIdentities"][i].player.summonerName,
			      short: props.match["participantIdentities"][i].player.summonerName.substring(0, 9) +"...",
            win: props.match["participants"][i].win,
            champion: props.match["participants"][i].championId,
            spell1: props.match["participants"][i].summoner1Id,
            spell2: props.match["participants"][i].summoner2Id,

            keystone: props.match["participants"][i].perks.styles[0].style,
            tree: props.match["participants"][i].perks.styles[1].style,
            level: props.match["participants"][i].summoner2Id,
            items: {
              item0: props.match["participants"][i].item0,
              item1: props.match["participants"][i].item1,
              item2: props.match["participants"][i].item2,
              item3: props.match["participants"][i].item3,
              item4: props.match["participants"][i].item4,
              item5: props.match["participants"][i].item5,
              ward: props.match["participants"][i].item6,
            },
            farm:
              props.match["participants"][i].totalMinionsKilled +
              props.match["participants"][i].neutralMinionsKilled,
            farmpm: (
              (props.match["participants"][i].totalMinionsKilled +
                props.match["participants"][i].neutralMinionsKilled) /
              (props.match.gameDuration / 60)
            ).toFixed(1),
            kp: (
              ((props.match["participants"][i].kills +
                props.match["participants"][i].assists) /
                t2Kills) *
              100
            ).toFixed(0),
            multikill: props.match["participants"][i].largestMultiKill,
            role: props.match["participants"][i].role,
            lane: props.match["participants"][i].lane,
            kills: props.match["participants"][i].kills,
            assists: props.match["participants"][i].assists,
            deaths: props.match["participants"][i].deaths,
            vscore: props.match["participants"][i].visionScore,
            kda:
              (props.match["participants"][i].kills +
                props.match["participants"][i].assists) /
              props.match["participants"][i].deaths,
          });
          t2.push({
            user: true,
			name: props.match["participantIdentities"][i].player.summonerName,
			short: props.match["participantIdentities"][i].player.summonerName.substring(0, 9) +"...",
            champion: props.match["participants"][i].championId,
            team: 2,
            role: props.match["participants"][i].role,
            lane: props.match["participants"][i].lane,
            kda: `${props.match["participants"][i].kills} / ${props.match["participants"][i].deaths} / ${props.match["participants"][i].assists}`,
          });
        } else {
          t2.push({
			name: props.match["participantIdentities"][i].player.summonerName,
			short: props.match["participantIdentities"][i].player.summonerName.substring(0, 9) +"...",
            champion: props.match["participants"][i].championId,
            team: 2,
            role: props.match["participants"][i].role,
            lane: props.match["participants"][i].lane,
            kda: `${props.match["participants"][i].kills} / ${props.match["participants"][i].deaths} / ${props.match["participants"][i].assists}`,
          });
        }
      }
    }

    setTeam1(t1);
    setTeam2(t2);
    setIsLoaded(true);
  }, [isLoaded, props]);

 if (!isLoaded) {
    return <div></div>;
  } else if (isLoaded) {
    return (
      <>
      {results != null &&
        <div className={results.win === true ? "solo-match" : "solo-match-lost"}>
        <div className="match-info">
          <div className="queue-type">{Queues(props.match.queueId)}</div>
          <div className="match-creation">
            {GetTime(props.match.gameCreation)}
          </div>
          <div className={results.win === true ? "victory" : "defeat"}>
            {winner(results.win)}
          </div>
          <div className="duration">
            {getDuration(props.match.gameDuration)}
          </div>
        </div>
        <div className="divider"></div>
        <div className="player-info">
          <div className="champion-img">
          <img
            alt="Avatar"
            src={ChampData(results.champion).imageUrl}
          />
          </div>
          <div className="spells">
            <img className="spell-1" alt="Spell" src={Spells(results.spell1)} />
            <img className="spell-2" alt="Spell" src={Spells(results.spell2)} />
          </div>
          <div className="player-runes">
            <div className="rune-keystone">
              <img alt="Keystone"
                className="rune-keystone-img"
                src={Keystones(results.keystone)}
              />
            </div>
            <div className="rune-tree">
              <img alt="Rune-tree" className="rune-tree-img" src={Keystones(results.tree)} />
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
                  results.kda > 5
                    ? "kda-orange"
                    : results.kda < 1.50
                    ? "kda-red"
                    : 4.00 < results.kda < 7.00
                    ? "kda-blue"
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
            <div className="level">Level {results.level}</div>
            <div className="farm">
              <span className="cs">{results.farm}</span>
              <span className="cspm"> ({results.farmpm}) </span>
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
              {team1.map((el, idx) => {
                return (
                  <div key={idx} className={`li1-${idx}`} id={el.name}>
                      <div className={`img-${idx}`}>
					  <img alt="ChampAvi"
                        className={`team-imgs`}
                        src={ChampData(el.champion).imageUrl}
                      />
					  </div>
					  {(el.name.length > 10) ? <div onClick={handleSubmit} id={el.name} className={`name-${idx}`}> {el.short}</div> : <div className={`name-${idx}`} id={el.name} onClick={handleSubmit}> {el.name}</div>}
                  </div>
                );
              })}
              {team2.map((el, idx) => {
                return (
					<div key={idx} className={`li2-${idx}`}>
						<div className={`img1-${idx}`}>
						<img alt="TinyAvi"
						  className={`team-imgs`}
						  src={ChampData(el.champion).imageUrl}
						/>
						</div>
						{(el.name.length > 10) ? <div onClick={handleSubmit} id={el.name} className={`name1-${idx}`}> {el.short}</div> : <div id={el.name} onClick={handleSubmit} className={`name1-${idx}`}> {el.name}</div>}
					</div>
				  );
              })}
		</div>
      </div>
      }
      </>
    );
  }
};

export default Match;
