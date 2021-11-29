import os
import json
import requests
from flask import Blueprint, jsonify
from requests.exceptions import URLRequired
from sqlalchemy.exc import SQLAlchemyError
from starter_app.models import Match, db


match_routes = Blueprint('match', __name__)
base_url = 'https://na1.api.riotgames.com/lol'
new_base_url = 'https://americas.api.riotgames.com/lol'

def find_pi(dict):
    pi = []
    parts = dict['participants']
    for i in parts:
        pi.append({
            'particapntId': i['participantId'],
            'player': {
                'accountId': i['puuid'],
                'profileIcon': i['profileIcon'],
            },
        })
    return pi

@match_routes.route('/post/<summoner>')
def update_matches(summoner):
    key = os.environ.get('RIOT_API_KEY')
    account_url = (
        f'{base_url}/summoner/v4/summoners/by-name/'
        f'{summoner}?api_key={key}'
    )

    summoner = requests.get(account_url)
    account_id = summoner.json()['accountId']
    puid = summoner.json()['puuid']
    # print("accountid:", account_id)
    # print("SUMMONER:", puid)
    match_arr_url = (
        f'{new_base_url}/match/v5/matches/by-puuid/'
        f'{puid}/ids?start=0&count=20&api_key={key}'
    )

    # print("RIGHT HERE:", requests.get(matches_url).json())
    matcharr = requests.get(match_arr_url).json()
    # for e in matcharr:
    #     matches_url = (
    #         f'{new_base_url}/match/v5/matches/{e}'
    #         f'?api_key={key}'
    #     )
    #     requests.get(matches_url)
    # # matches = requests.get(matches_url).json()
    # print("ARRAY:", matcharr)

    # matches = []
    for match in matcharr:

        match_url = f'{new_base_url}/match/v5/matches/{match}?api_key={key}'
        try:
            response = requests.get(match_url)
            game_id = response.json()['info']['gameId']
            platform_id = response.json()['info']['platformId']
            game_creation = response.json()['info']['gameCreation']
            game_duration = response.json()['info']['gameDuration']
            queue_id = response.json()['info']['queueId']
            # season_id = response.json()['info']['seasonId']
            game_mode = response.json()['info']['gameMode']
            teams = json.dumps(response.json()['info']['teams'])
            part = json.dumps(response.json()['info']['participants'])
            pi = json.dumps(find_pi(response.json()['info']))
            try:
                new_match = Match(gameId=game_id,
                                  platformId=platform_id,
                                  gameCreation=game_creation,
                                  gameDuration=game_duration,
                                  queueId=queue_id, seasonId='11',
                                  gameMode=game_mode, teams=teams,
                                  participants=part,
                                  participantIdentities=pi)
                db.session.add(new_match)
                db.session.commit()
            except SQLAlchemyError:
                db.session.rollback()
                print('Already there!')
                continue
        except requests.exceptions.RequestException as e:
            break
    new_matches = Match.query.filter(Match.participantIdentities.like(
        f'%{account_id}%')).order_by(Match.gameCreation.desc()).all()
    match_list = [match.to_dict() for match in new_matches]
    return jsonify(match_list)
