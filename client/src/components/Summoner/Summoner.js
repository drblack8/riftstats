import React, { useEffect, useState } from "react";
import "./Summoner.css";
import SearchBar from "../SearchBar/SearchBar";
import { useParams } from "react-router-dom";

const Summoner = (props) => {
  const [error, setError] = useState(null);
  const [summoner, setSummoner] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  let { input } = useParams();
  console.log(input);
  let championByIdCache = {};
  let championJson = {};

  async function getLatestChampionDDragon(language = "en_US") {
    if (championJson[language]) return championJson[language];

    let response;
    let versionIndex = 0;
    do {
      // I loop over versions because 9.22.1 is broken
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
    // Setup cache
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

  // NOTE: IN DDRAGON THE ID IS THE CLEAN NAME!!! It's also super-inconsistent, and broken at times.
  // Cho'gath => Chogath, Wukong => Monkeyking, Fiddlesticks => Fiddlesticks/FiddleSticks (depending on what mood DDragon is in this patch)
  async function getChampionByID(name, language = "en_US") {
    return await getLatestChampionDDragon(language)[name];
  }
  useEffect(() => {
    fetch(`/api/summoner/${input}`)
      .then((res) => res.json())
      .then(
        (result) => {
          // setItems(result[0]);
          setIsLoaded(true);
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
      </div>
    );
  }
};

export default Summoner;
