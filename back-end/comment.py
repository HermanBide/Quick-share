from peewee import *
import datetime

from db import DATABASE
from user import User
from post import Post

class Comment(Model):
    comment = CharField()
    user = ForeignKeyField(User, backref='comments')
    post_id = ForeignKeyField(Post, backref='comments')
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE