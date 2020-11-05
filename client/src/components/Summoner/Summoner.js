import React, { useEffect, useState } from "react";
import "./Summoner.css";
import SearchBar from "../SearchBar/SearchBar";
import { useParams } from "react-router-dom";
import Match from "../Match/Match";

const Summoner = (props) => {
  const [error, setError] = useState(null);
  const [summoner, setSummoner] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [matches, setMatches] = useState([]);
  let { input } = useParams();
  console.log(input);

  useEffect(() => {
    fetch(`/api/summoner/${input}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setMatches(result.matches);
          setIsLoaded(true);
          console.log(matches);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, [input]);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="sum-page">
        <div className="sum-page-search">
          <SearchBar />
        </div>
        <div className="sum-info">
          <h1>{/* {summoner.name} */} wat</h1>
        </div>
        <div className="sum-matches">
          <ul>
            {matches.map((match, idx) => {
                return <li key={idx} ><Match props={match} /></li>
            })}
            </ul>
        </div>
      </div>
    );
  }
};

export default Summoner;
