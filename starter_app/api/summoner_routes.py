import os
import requests
from flask import Blueprint, jsonify
from starter_app.models import Match, db


summoner_routes = Blueprint('summoner', __name__)
base_url = 'https://na1.api.riotgames.com/lol'
base_ranked_url = 'https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/'


@summoner_routes.route('/info/<username>')
def get_sum(username):
    key = os.environ.get('RIOT_API_KEY')
    account_url = (
        f'{base_url}/summoner/v4/summoners/by-name/'
        f'{username}?api_key={key}'
    )

    summoner = requests.get(account_url)
    print(summoner)
    try:
        enc_id = summoner.json()['id']

        ranked_url = (
            f'{base_ranked_url}'
            f'{enc_id}?api_key={key}'
        )
        ranked_data = requests.get(ranked_url)
        print('RANKED DATA: ', ranked_data)
        account_id = summoner.json()['accountId']
        summoner_name = summoner.json()['name']
        profile_icon = summoner.json()['profileIconId']
        summoner_level = summoner.json()['summonerLevel']
        res = Match.query.filter(
            Match.participantIdentities.like(f'%{account_id}%')).order_by(Match.gameCreation.desc()).all()
        match_list = [match.to_dict() for match in res]
        return jsonify({
            "matchList": match_list,
            "token": account_id,
            "sumName": summoner_name,
            "profileIcon": profile_icon,
            "summonerLevel": summoner_level,
            "rankedInfo": ranked_data.json()
        })
    except KeyError:
        return jsonify('Summoner Not Found')
