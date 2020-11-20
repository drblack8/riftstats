import datetime
from starter_app.models import Match
from starter_app import app, db
from dotenv import load_dotenv
load_dotenv()


with app.app_context():
    db.drop_all()
    db.create_all()
