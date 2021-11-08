from peewee import *
from db import DATABASE

from user import User
from post import Post

class Favorite(Model):
    post = ForeignKeyField(Post, backref='favorites')
    user = ForeignKeyField(User, backref='favorites')

    class Meta:
        database = DATABASE