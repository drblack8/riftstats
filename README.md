
# RiftStats
*By Daniel Black - [Check out RiftStats](https:/gxrift.com/)*
- League of Legends Stat Analysis
- Updates to Live game analysis coming soon!

**Table of Contents**

* [RiftStats at a Glance](#WhatsInTheSauce-at-a-glance)
* [Application Architecture & Technologies Used](#application-architecture)
* [Backend Overview](#backend-overview)
* [Frontend Overview](#frontend-overview)
* [Security & Authorization](#security-&-authorization)
* [Conclusion & Future Features](#conclusion-&-future-features)

## RiftStats at a Glance
RiftStats is a full-stack web app that allows users to track their live, in-game stats from the worlds most popular video game: League of Legends. In addition to a comprehensive match history a user can also see a detailed statistical analysis for all characters they play in-game as well as their ranked statistics.

RiftStats uses the [Riot API](https://developer.riotgames.com/) for retrieval of dynamic data, such as match history. Static data, such as images and champion names are accessed through Riot's DataDragon database.

#### Application Architecture
RiftStats is a full stack application utilizing [Flask SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/), [Flask-Migrate](https://flask-migrate.readthedocs.io/en/latest/) and [Postgress](https://www.postgresql.org/) for the backend/database.

## Backend Overview
The application [Flask](https://flask.palletsprojects.com/en/1.1.x/) server connects the database and the results from a GET request to the Riot API to the frontend(React). Redux and React Hooks manage the data it receives from Flask.  The backend is the most complicated part of the application as it alleviates the need to make excessive API calls. A single page load can require up to 500 API calls and storing results with SQL made the website infinitely more efficient. Only with the press of an update button will the backend ever make an API call.


## Frontend Overview

[React](https://reactjs.org/) engine hosts the entire frontend. The backed is accessed through Fetches using the useEffect Hook.  From there, the
[hooks](https://reactjs.org/docs/hooks-intro.html) temporarily store the data on a page. CSS then displays the data neatly after using a plethora of algorithms to turn the data into "readable" statistics.

The main content on the site cannot be changed to fit a mobile screen in an effective way, and thus the site needs to be kept at at least a certain size.

The site attempts to maintain a pretty simple theme, keeping it simple and clean so data can be displayed in the easiest possible way.

Here's an example from the "Summoner" component:
```css
.sum-splash {

min-width: 1110px;

width: 55%;

height: auto;

position: absolute;

overflow: hidden;

opacity: .7;

background-color: #111225;

z-index: -1;

margin-top: -90px;

}

.loading {

width: 100%;

margin-top: 200px;

display: flex;

flex-direction: column;

flex-wrap: nowrap;

justify-content: flex-start;

align-content: center;

align-items: center;

}

.gradient {

width: 100%;

background: radial-gradient(ellipse,rgba(7,7,32,0) 23%,#111225 63%);

position: absolute;

z-index: 1999;

left: 0;

height: 100%;

}

.sum-splash-img {

margin-top: 20px;

vertical-align: middle;

min-width: 1110px;

width: 55%;

height: auto;

position: relative;

}

.sum-page {

margin-top: 10px;

min-width: 1110px;

width: 55%;

margin-left: auto;

margin-right: auto;

display: grid;

grid-template-columns: repeat(4, 0) .8fr .7fr 1.5fr .5fr 1.5fr 1fr;

grid-template-rows: repeat(3, 1fr) .6fr 1.4fr repeat(29, 1fr);

grid-column-gap: 0px;

grid-row-gap: 0px;

}

.sum-stats {

justify-self: end;

grid-area: 4 / 5 / 35 / 7;

display: flex;

flex-direction: column;

flex-wrap: nowrap;

justify-content: flex-start;

align-content: stretch;

align-items: flex-start;

}

.sum-matches {

grid-area: 5 / 7 / 35 / 11;

}

.sum-icon {

grid-area: 1 / 5 / 3 / 6;

justify-content: center;

align-items: center;

}

.sum-name {

align-self: end;

font-size: 36px;

margin-bottom: 10px;

font-weight: 900;

grid-area: 1 / 6 / 2 / 9;

}

.update-btn {

font-size: smaller;

font-weight: 900;

grid-area: 2 / 6 / 3 / 9;

}

.update-info {

grid-area: update-info;

}

.sum-header {

align-self: center;

text-align: center;

grid-area: 1 / 9 / 3 / 11;

}

.sum-header p {

font-weight: 900;

font-size: 20px;

}

.sum-sorting {

grid-area: 3 / 5 / 4 / 16;

}

.alert-sumpage {

margin-top: 50px;

margin-left: auto;

display: flex;

flex-direction: column;

flex-wrap: nowrap;

align-content: center;

align-items: center;

height: 700px;

}

.alert-name {

font-size: 36px;

margin-bottom: 10px;

font-weight: 900;

}

.alert-message {

text-align: center;

font-size: 24px;

margin-bottom: 10px;

font-weight: 700;

}

.alert-icon {

margin-bottom: 10px;

}

.sum-matches-title {

grid-area: 4 / 7 / 5 / 11;

border: 1px solid rgba(128, 128, 128, 0.55);

padding-top: 18.5px;

margin-left: 3px;

margin-bottom: 2px;

height: 52px;

text-align: center;

font-size: 1.2rem;

font-weight: 700;

}

.sum-search-title {

font-size: 25px;

font-weight: 700;

}

ul {

list-style-type: none;

}

body {

color: whitesmoke;

}

.issue-main {

}

.issue-message {

}

.issue-search {

}

.title-text {

margin-top: 2px;

}

.img-container {

position: relative;

}

.img-container .top-img {

position: absolute;

width: 128px;

left: 5px;

z-index: 1;

}

.bottom-img {

width: 117px;

margin-top: 6px;

margin-left: 12px;

border-radius: 50%;

}

.sum-level {

position: absolute;

font-weight: bold;

font-size: small;

color: #bbbedb;

bottom: -6.5px;

left: 40%;

z-index: 2;

}

.sum-level {

position: absolute;

font-weight: bold;

font-size: small;

color: #bbbedb;

bottom: -6.5px;

left: 40%;

z-index: 2;

}

.sum-level-short {

position: absolute;

font-weight: bold;

font-size: small;

color: #bbbedb;

bottom: -6.5px;

left: 42%;

z-index: 2;

}
```



## Conclusion & Future Features

RiftStats not only enhanced my abilities as a software engineer but also allowed me to combine two passions. The application was a joy to create. So much so, thatI decided to buy a domain and continue work on it. I hope this portfolio piece can turn into something even better and soon!

In the future I will be looking to add OAuth and a live game feature.

Thanks for checking out [RiftStats](https://whatsinthesauce.herokuapp.com/)!

# User Stories

&check; As a user I want to easily access my data quickly, even when in the midst of a game.

&check; As a user I'd need my data to be accurate so I can improve my gameplay.

&check; As a user I'd like to be able to update my data at any given time, even seconds after I complete a game.

# MinVP
&check; Match History

&check; Search Functionality

&check; Riot API Connection

&check; Ranked & Champion Statistics
