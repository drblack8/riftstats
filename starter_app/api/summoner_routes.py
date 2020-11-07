import os
import requests
from flask import Blueprint
# from starter_app.models import Match, Summoner


summoner_routes = Blueprint('summoner', __name__)


@summoner_routes.route('/info/<username>')
def get_sum(username):
    key = os.environ.get('RIOT_API_KEY')
    account_url = f'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/{username}?api_key={key}'
    summoner = requests.get(account_url)
    account_id = summoner.json()['accountId']
    print(summoner.json()['name'])
    res_url = f'https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/{account_id}?endIndex=20&api_key={key}'
    response = requests.get(res_url)
    return response.json()

@summoner_routes.route('/match/<matchId>')
def get_match(matchId):
    key = os.environ.get('RIOT_API_KEY')
    match_url = f'https://na1.api.riotgames.com/lol/match/v4/matches/{matchId}?api_key={key}'
    response = requests.get(match_url)
    return response.json()
