import os
from flask import Flask, render_template, request, session
from flask_cors import CORS
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_migrate import Migrate


from starter_app.models import db
from starter_app.api.summoner_routes import summoner_routes
from starter_app.api.match_routes import match_routes

from starter_app.config import Config

app = Flask(__name__)

app.config.from_object(Config)
app.register_blueprint(summoner_routes, url_prefix='/api/summoner')
app.register_blueprint(match_routes, url_prefix='/api/match')


db.init_app(app)
Migrate(app, db)

CORS(app)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    print("path", path)
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
