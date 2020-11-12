import os
import requests
from flask import Blueprint, jsonify
from starter_app.models import Match, db


summoner_routes = Blueprint('summoner', __name__)
base_url = 'https://na1.api.riotgames.com/lol'


@summoner_routes.route('/info/<username>')
def get_sum(username):
    key = os.environ.get('RIOT_API_KEY')
    account_url = (
        f'{base_url}/summoner/v4/summoners/by-name/'
        f'{username}?api_key={key}'
    )
    summoner = requests.get(account_url)
    account_id = summoner.json()['accountId']
    res = Match.query.filter(
        Match.participantIdentities.like(f'%{account_id}%')).order_by(Match.gameCreation.desc()).all()
    match_list = [match.to_dict() for match in res]
    return jsonify(match_list)
