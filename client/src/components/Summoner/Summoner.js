import React, { useEffect, useState } from "react";
import "./Summoner.css";
import { useParams } from "react-router-dom";
import Match from "../Match/Match";
import NestedSearch from "./NestedSearch/NestedSearch";
import { Button } from "../Button/Button";

const Summoner = (props) => {
  const [error, setError] = useState(null);
  const [summoner, setSummoner] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [matches, setMatches] = useState([]);
  let { input } = useParams();

  useEffect(() => {
    setIsLoaded(false)
    fetch(`/api/summoner/info/${input}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setMatches(result);
          setSummoner(input);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, [summoner, input]);

  const handleUpdate = () => {
    setIsLoaded(false);
    fetch(`/api/match/post/${input}`, )
      .then((res) => res.json())
      .then(
          (result) => {
            console.log(result);
            setIsLoaded(true)
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }

  if (error) {
    console.log("Error: ", error.message);
    return (
      <div className="sum-page">
        <div className="sum-page-search">
          <NestedSearch />
        </div>
        <div className="no-sum">No results for {input}</div>
      </div>
    );
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="sum-page">
        <div className="sum-page-search">
          <NestedSearch />
        </div>
        <div className="sum-info">
          <h1>{summoner}</h1>
          <Button onClick={handleUpdate}>Update</Button>
        </div>
        <div className="sum-stats">
            <h1>stats will go here</h1>
        </div>
        <div className="sum-matches">
          <ul>
            {matches.map((match, idx) => {
              return (
                <li key={idx}>
                  <Match match={match} summoner={summoner}/>
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
