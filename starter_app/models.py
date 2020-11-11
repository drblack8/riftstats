from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.mysql import BIGINT
db = SQLAlchemy()


class Match(db.Model):
    __tablename__ = 'matches'

    id = db.Column(db.Integer, primary_key=True)
    gameId = db.Column(db.BIGINT, nullable=False, unique=True)
    platformId = db.Column(db.String(40), nullable=False)
    gameCreation = db.Column(db.BIGINT, nullable=False)
    gameDuration = db.Column(db.BIGINT, nullable=False)
    queueId = db.Column(db.Integer, nullable=False)
    seasonId = db.Column(db.Integer, nullable=False)
    gameMode = db.Column(db.String(40), nullable=False)
    teams = db.Column(db.Text, nullable=False)
    participants = db.Column(db.Text, nullable=False)
    participantIdentities = db.Column(db.Text, nullable=False)

# class Summoner(db.Model):
#     __tablename__ = 'summoners'

#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(40), nullable=False, unique=True)
#     accountId = db.Column(db.String(56), nullable=False, unique=True)
#     profileIconId = db.Column(db.Integer, nullable=False)
#     summonerLevel = db.Column(db.Integer, nullable=False)
