import os
import json
import requests
from flask import Blueprint, jsonify


leaderboard_routes = Blueprint('leaderboard', __name__)
base_url = 'https://na1.api.riotgames.com/lol'


@leaderboard_routes.route('/leaderboard')
def leaderboards():
    key = os.environ.get('RIOT_API_KEY')

    lb_url = (
        f'{base_url}/league-exp/v4/entries/RANKED_SOLO_5x5'
        f'/CHALLENGER/I?page=1&api_key={key}'
    )

    players = requests.get(lb_url).json()

    res = []
    for player in players:
        summoner = player['summonerName']
        account_url = (
            f'{base_url}/summoner/v4/summoners/by-name/'
            f'{summoner}?api_key={key}'
        )
        summoner = requests.get(account_url)
        icon = summoner.json()['profileIconId']

        sub = {
            name: summoner,
            profileIcon: icon,
            wins: player['wins'],
            losses: player['losses'],
            leaguePoints: player['leaguePoints'],
            tier: player['tier'],
        }

        res.append(sub)

    return jsonify(res)
