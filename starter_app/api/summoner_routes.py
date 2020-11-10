import os
import requests
from flask import Blueprint
from starter_app.models import Match


summoner_routes = Blueprint('summoner', __name__)
match_routes = Blueprint('match', __name__)
base_url = 'https://na1.api.riotgames.com/lol'


@summoner_routes.route('/info/<username>')
def get_sum(username):
    key = os.environ.get('RIOT_API_KEY')
    account_url = (
        f'{base_url}/summoner/v4/summoners/by-name/'
        f'{username}?api_key={key}'
    )
    print(account_url)
    summoner = requests.get(account_url)
    account_id = summoner.json()['accountId']
    print(summoner.json()['name'])
    res_url = (
        f'{base_url}/match/v4/matchlists/by-account/'
        f'{account_id}?endIndex=20&api_key={key}'
    )
    response = requests.get(res_url)
    return response.json()


@summoner_routes.route('/match/<matchIds>')
def get_match(matchIds):
    key = os.environ.get('RIOT_API_KEY')
    match_url = f'{base_url}/match/v4/matches/{matchId}?api_key={key}'
    response = requests.get(match_url)
    return response.json()
