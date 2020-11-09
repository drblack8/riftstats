import os
import requests
from flask import Blueprint
from starter_app.models import Match, Summoner


match_routes = Blueprint('match', __name__)


@match_routes.route('/post/<matchId>', method)
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
