from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.mysql import BIGINT
import json
from io import StringIO
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

    def to_dict(self):
        return {
            "gameId": self.gameId,
            "platformId": self.platformId,
            "gameCreation": self.gameCreation,
            "gameDuration": self.gameDuration,
            "queueId": self.queueId,
            "seasonId": self.seasonId,
            "gameMode": self.gameMode,
            "teams": json.load(StringIO(self.teams)),
            "participants": json.load(StringIO(self.participants)),
            "participantIdentities": json.load(
                StringIO(self.participantIdentities)),
        }


# def example(self):
#     return {
#         "gameId": self.gameId,
#         "platformId": self.platformId,
#         "gameCreation": self.gameCreation,
#         "gameDuration": self.gameDuration,
#         "queueId": self.queueId,
#         "seasonId": self.seasonId,
#         "gameMode": self.gameMode,
#         "teams": json.load(StringIO(self.teams)),
#         "participants": json.load(StringIO(self.participants)),
#         "participantIdentities": [{participanti.participantId}json.load(
#             StringIO(self.participantIdentities))],
#     }
# class Summoner(db.Model):
#     __tablename__ = 'summoners'

#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(40), nullable=False, unique=True)
#     accountId = db.Column(db.String(56), nullable=False, unique=True)
#     profileIconId = db.Column(db.Integer, nullable=False)
#     summonerLevel = db.Column(db.Integer, nullable=False)
