
# RiftStats
*By Daniel Black - [Check out RiftStats](https://gxrift.com/)*
- League of Legends Stat Analysis

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
