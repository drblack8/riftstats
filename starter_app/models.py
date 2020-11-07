from flask_sqlalchemy import SQLAlchemy
# from sqlalchemy.dialects.postgresql import ARRAY
db = SQLAlchemy()


# class Summoner(db.Model):
#     __tablename__ = 'summoners'

#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(40), nullable=False, unique=True)
#     accountId = db.Column(db.String(56), nullable=False, unique=True)
#     profileIconId = db.Column(db.Integer, nullable=False)
#     summonerLevel = db.Column(db.Integer, nullable=False)

# class Match(db.Model):
#     __tablename__ = 'matches'

#     id = db.Column(db.Integer, primary_key=True)
#     gameId = db.Column(db.Integer, nullable=False, unique=True)
#     platformId = db.Column(db.String(40), nullable=False)
#     gameCreation = db.Column(db.Integer, nullable=False)
#     gameDuration = db.Column(db.Integer, nullable=False)
#     queueId = db.Column(db.Integer, nullable=False)
#     seasonId = db.Column(db.Integer, nullable=False)
#     gameMode = db.Column(db.String(40), nullable=False)
#     teams = db.Column(db.ARRAY, nullable=False)
#     participants = db.Column(db.ARRAY, nullable=False)
#     participantIdentities = db.Column(db.ARRAY, nullable=False)
