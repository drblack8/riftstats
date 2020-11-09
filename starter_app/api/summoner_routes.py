import os
import requests
from flask import Blueprint
from starter_app.models import Match, Summoner


summoner_routes = Blueprint('summoner', __name__)
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


@summoner_routes.route('/match/<matchId>')
def get_match(matchId):
    key = os.environ.get('RIOT_API_KEY')
    match_url = f'{base_url}/match/v4/matches/{matchId}?api_key={key}'
    response = requests.get(match_url)
    if matchId == '3654660189':
        print(response.json()['gameId'])
        print(response.json()['platformId'])
        print(response.json()['gameCreation'])
        print(response.json()['gameDuration'])
        print(response.json()['queueId'])
        print(response.json()['seasonId'])
        print(response.json()['gameMode'])
        print(response.json()['teams'])
        print(response.json()['participants'])
        print(response.json()['participantIdentities'])
    return response.json()
