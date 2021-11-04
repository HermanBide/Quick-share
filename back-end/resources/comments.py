from flask import Blueprint, jsonify, request
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict
from flask_login import current_user, login_required

from comment import Comment
from post import Post
from user import User

comment = Blueprint('comments', __name__, url_prefix="/comments")

@comment.route('/', methods=['GET'])
def get_all_comments():
    try:
        comments = [model_to_dict(comment) for comment in Comment.select()]
        return jsonify(comments), 200
    except DoesNotExist:
        return jsonify(error='Error getting the comment resource!'), 500

@comment.route('/<int:id>', methods=['GET'])
def get_comment_by_id(id):
    try:
        comment = Comment.get_by_id(id)
        return jsonify(model_to_dict(comment, backrefs=True)), 200
    except DoesNotExist:
        return jsonify(error='Error getting the comment resource!'), 500

@comment.route('/<int:post_id>', methods=['POST'])
@login_required
def new_comment(post_id):
    body = request.get_json()
    comment = Comment.create(**body, post_id=post_id)
    comment_dict = model_to_dict(comment, exclude=[User.password])
    return jsonify(comment_dict), 201
 

@comment.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_comment(id):
    # if(Comment.user != current_user.id):
    #     return jsonify(message='Unauthorized!!!'), 402
    (Comment.delete().where(Comment.id == id).execute())
    return jsonify(message='Comment has been deleted'), 200