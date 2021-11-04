from peewee import *

from db import DATABASE
# from user import User
from post import Post

class Comment(Model):
    comment = CharField()
    # user = ForeignKeyField(User, backref='comments')
    # post_id = ForeignKeyField(Post, backref='comments')
    

    class Meta:
        database = DATABASE