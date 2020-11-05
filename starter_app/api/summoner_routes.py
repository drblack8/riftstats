import os
import requests
from flask import Blueprint


summoner_routes = Blueprint('summoner', __name__)


@summoner_routes.route('/<username>')
def get_sum(username):
    print('WEEEEWOOOO')
    key = os.environ.get('RIOT_API_KEY')
    account_url = f'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/{username}?api_key={key}'
    account_id = requests.get(account_url).json()['accountId']
    print(account_id)
    res_url = f'https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/{account_id}?api_key={key}'
    response = requests.get(res_url)
    return response.json()
