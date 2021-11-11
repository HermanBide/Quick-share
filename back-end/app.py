from flask import Flask, g
from flask_cors import CORS
from peewee import DoesNotExist
from flask_login import LoginManager, login_manager
import os

from db import DATABASE, initialize
from favorite import Favorite
from user import User
from post import Post
from comment import Comment
from resources.users import user
from resources.comments import comment
from resources.posts import post

DEBUG = True
PORT = 8000

login_manager = LoginManager()
app = Flask(__name__)

app.secret_key = os.environ.get('SECRET') or 'codecamp2021cohert'
login_manager.init_app(app)

@login_manager.user_loader
def load_user(userid):
    try:
        return User.get(User.id == userid)
    except DoesNotExist:
        return None

@app.before_request
def before_request():
    """Connect to the database before each request."""
    g.db = DATABASE
    g.db.connect()

@app.after_request
def after_request(response):
    """Close the database connection after each request."""
    g.db.close()
    return response

@app.route('/')
def index():
    return 'hi you are now connected to the this port!', 200

origins=['http://localhost:3000']

if 'DATABASE_URL' in os.environ:
    initialize([User, Post, Favorite, Comment])
    app.config['SESSION_COOKIE_SECURE'] = True
    app.config['SESSION_COOKIE_HTTPONLY'] = False
    app.config['SESSION_COOKIE_SAMESITE'] = 'None'
    origins.append(os.environ.get('CLIENT_URL'))

app.register_blueprint(user)
app.register_blueprint(post)
app.register_blueprint(comment)

CORS(app, origins=origins, supports_credentials=True)

if __name__ == '__main__':
    print("I'm running app.py!")
    initialize([User, Post, Favorite, Comment])
    app.run(debug=DEBUG, port=PORT)