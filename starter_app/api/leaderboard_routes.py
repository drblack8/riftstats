import os
import json
import requests
from flask import Blueprint, jsonify


leaderboard_routes = Blueprint('leaderboard', __name__)
base_url = 'https://na1.api.riotgames.com/lol'


@leaderboard_routes.route('/current')
def leaderboards():
    key = os.environ.get('RIOT_API_KEY')

    lb_url = (
        f'{base_url}/league-exp/v4/entries/RANKED_SOLO_5x5'
        f'/CHALLENGER/I?page=1&api_key={key}'
    )

    players = requests.get(lb_url).json()

    res = []
    for i in range(0, 10):
        name = players[i]['summonerName']
        account_url = (
            f'{base_url}/summoner/v4/summoners/by-name/'
            f'{name}?api_key={key}'
        )
        summoner = requests.get(account_url)
        icon = summoner.json()['profileIconId']

        sub = {
            'name': name,
            'profileIcon': icon,
            'wins': players[i]['wins'],
            'losses': players[i]['losses'],
            'leaguePoints': players[i]['leaguePoints'],
            'tier': players[i]['tier'],
        }

        res.append(sub)

    return jsonify(res)
