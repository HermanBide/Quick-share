from peewee import *

from db import DATABASE
from user import User

class Post(Model):
    title = CharField()
    director = CharField()
    release_date = int()
    review = CharField()
    genre = CharField()
    user = ForeignKeyField(User, backref='posts')
    

    class Meta:
        database = DATABASE