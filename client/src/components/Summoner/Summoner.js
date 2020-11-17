import React, { useEffect, useState } from "react";
import "./Summoner.css";
import { useParams } from "react-router-dom";
import Match from "../Match/Match";
import { Button } from "../Button/Button";
import Stats from "../Stats/Stats";

const Summoner = (props) => {
  const [error, setError] = useState(null);
  const [summoner, setSummoner] = useState("");
  const [issue, setIssue] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [profileIcon, setProfileIcon] = useState(4803);
  const [summonerLevel, setSummonerLevel] = useState(30);
  const [rankedData, setRankedData] = useState([{},{}]);
  const [matches, setMatches] = useState([]);
  let { input } = useParams();

  useEffect(() => {
    setIsLoaded(false);
    fetch(`/api/summoner/info/${input}`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          if (result === "Summoner Not Found") {
            setIssue(true);
            setIsLoaded(true);
          }
          setMatches(result.matchList);
          setSummoner(result.sumName);
          setProfileIcon(result.profileIcon);
          setRankedData(result.rankedInfo)
          setSummonerLevel(result.summonerLevel);
          setIsLoaded(true);
        },
        (error) => {
          setError({ first: error });
          setIsLoaded(true);
        }
      );
  }, [input]);

  const handleUpdate = () => {
    fetch(`/api/match/post/${input}`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setMatches(result);
        },
        (error) => {
          setError({ second: error });
        }
      );
  };

  if (error) {
    console.log("Error: ", error.message);
    return (
      <div className="sum-page">
        <div className="sum-page-search">

        </div>
        <div className="no-sum">No results for {input}</div>
      </div>
    );
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (issue) {
    return (
      <div className="issue-main">
        <div className="issue-message">
          <p>Summoner: [{input.toUpperCase()}] Does Not Exist.</p>
          <p>Please try searching again.</p>
        </div>
        <div className="issue-search">

        </div>
      </div>
    );
  } else if (isLoaded && matches.length === 0) {
    return (
      <div className="sum-page">
        <div className="sum-header">
          <div className="sum-search-title">Welcome to your Stats Page!</div>
          <div className="sum-page-search">

          </div>
        </div>

          <div className="sum-matches-title">
            <p className="title-text">
              Below are your last 20 matches. Sort funtionality coming soon!
            </p>
          </div>
          <div className="sum-icon">
            <div className="img-container">
              <img
                className="top-img"
                src="https://i.imgur.com/phgH52r.png"
                alt="Profile"
              />
              <img
                className="bottom-img"
                src={`https://raw.communitydragon.org/10.23/game/assets/ux/summonericons/profileicon${profileIcon}.png`}
                alt="Profile"
              />
              <p className="sum-level">{summonerLevel}</p>
            </div>
          </div>
          <div className="sum-name">{summoner}</div>
          <div className="update-btn">
          <Button onClick={handleUpdate}>Update</Button>
            </div>
        <div className="no-matches">
          Our database has not cached any matches for you, please Update!
        </div>
      </div>
    );
  } else if (isLoaded) {
    return (
      <div className="sum-page">
        <div className="sum-header">
          <div className="sum-search-title">Welcome to your Stats Page!</div>
          <div className="sum-page-search">

          </div>
        </div>


          <div className="sum-matches-title">
            <p className="title-text">
              Below are your last 20 matches. Sort funtionality coming soon!
            </p>
          </div>
          <div className="sum-icon">
            <div className="img-container">
              <img
                className="top-img"
                src="https://i.imgur.com/phgH52r.png"
                alt="Profile"
              />
              <img
                className="bottom-img"
                src={`https://raw.communitydragon.org/10.23/game/assets/ux/summonericons/profileicon${profileIcon}.png`}
                alt="Profile"
              />
              <p className="sum-level">{summonerLevel}</p>
            </div>
          </div>

          <div className="sum-name">{summoner}</div>
          <div className="update-btn">
          <Button onClick={handleUpdate}>Update</Button>
          </div>
        <div className="sum-stats">
          <Stats ranked={rankedData}/>
        </div>
        <div className="sum-matches">
          <ul>
            {matches.map((match, idx) => {
              return (
                <li key={idx}>
                  <Match match={match} summoner={summoner} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
};

export default Summoner;
