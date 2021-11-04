from peewee import *
from db import DATABASE

from user import User

class Favorite(Model):
    user = ForeignKeyField(User, backref='favorites')

    class Meta:
        database = DATABASE