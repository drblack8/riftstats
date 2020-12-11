import os
import json
import requests
from flask import Blueprint, jsonify


leaderboard_routes = Blueprint('leaderboard', __name__)
base_url = 'https://na1.api.riotgames.com/lol'

@match_routes.route('/leaderboard')
def update_matches():
    key = os.environ.get('RIOT_API_KEY')
    account_url = (
        f'{base_url}/summoner/v4/summoners/by-name/'
        f'{summoner}?api_key={key}'
    )
    summoner = requests.get(account_url)
    account_id = summoner.json()['accountId']
