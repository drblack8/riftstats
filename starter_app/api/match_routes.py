import os
import json
import requests
from flask import Blueprint, jsonify
from sqlalchemy.exc import SQLAlchemyError
from starter_app.models import Match, db


match_routes = Blueprint('match', __name__)
base_url = 'https://na1.api.riotgames.com/lol'


@match_routes.route('/post/<summoner>')
def update_matches(summoner):
    key = os.environ.get('RIOT_API_KEY')
    account_url = (
        f'{base_url}/summoner/v4/summoners/by-name/'
        f'{summoner}?api_key={key}'
    )
    summoner = requests.get(account_url)
    account_id = summoner.json()['accountId']
    matches_url = (
        f'{base_url}/match/v4/matchlists/by-account/'
        f'{account_id}?endIndex=20&api_key={key}'
    )
    matches = requests.get(matches_url).json()['matches']
    for match in matches:
        matchId = match['gameId']
        match_url = f'{base_url}/match/v4/matches/{matchId}?api_key={key}'
        response = requests.get(match_url)
        game_id = response.json()['gameId']
        platform_id = response.json()['platformId']
        game_creation = response.json()['gameCreation']
        game_duration = response.json()['gameDuration']
        queue_id = response.json()['queueId']
        season_id = response.json()['seasonId']
        game_mode = response.json()['gameMode']
        teams = json.dumps(response.json()['teams'])
        part = json.dumps(response.json()['participants'])
        pi = json.dumps(response.json()['participantIdentities'])
        try:
            new_match = Match(gameId=game_id,
                              platformId=platform_id,
                              gameCreation=game_creation,
                              gameDuration=game_duration,
                              queueId=queue_id, seasonId=season_id,
                              gameMode=game_mode, teams=teams,
                              participants=part,
                              participantIdentities=pi)
            db.session.add(new_match)
            db.session.commit()
        except SQLAlchemyError:
            db.session.rollback()
            print('Already there!')
            continue
    new_matches = Match.query.filter(Match.participantIdentities.like(
        f'%{account_id}%')).order_by(Match.gameCreation.desc()).limit(20).all()
    match_list = [match.to_dict() for match in new_matches]
    return jsonify(match_list)
