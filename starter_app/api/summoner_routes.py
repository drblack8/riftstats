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
    try:
        account_id = summoner.json()['accountId']
        summoner_name = summoner.json()['name']
        res = Match.query.filter(
            Match.participantIdentities.like(f'%{account_id}%')).order_by(Match.gameCreation.desc()).limit(20).all()
        match_list = [match.to_dict() for match in res]
        return jsonify({
            "matchList": match_list,
            "token": account_id,
            "sumName": summoner_name
        })
    except KeyError:
        return {'Summoner Not Found'}
