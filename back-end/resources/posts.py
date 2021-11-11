from flask import Blueprint, jsonify, request
from peewee import EXCLUDED, DoesNotExist
from playhouse.shortcuts import model_to_dict
from flask_login import current_user, login_required

from post import Post
from user import User

post=Blueprint('post', __name__, url_prefix="/posts")

@post.route('/', methods=['GET'])
def get_all_posts():
    try:
        posts = [model_to_dict(post) for post in Post.select()]
        return jsonify(posts), 200
    except DoesNotExist:
        return jsonify(error='Error getting the post resource!'), 500

@post.route('/<int:id>', methods=['GET'])
def get_post_id(id):
    print(id, "Printing the id")
    try:
        post = Post.get_by_id(id)
        return jsonify(model_to_dict(post, backrefs=True, exclude=[User.password])), 200
    except DoesNotExist:
        return jsonify(error='Error getting the post resource!'), 500

@post.route('/new', methods=['POST'])
@login_required
def create_post():
    body = request.get_json()
    post = Post.create(**body, user=current_user.id)
    post_dict = model_to_dict(post, exclude=[User.password])
    return jsonify(post_dict), 201

@post.route('/<id>', methods=['PUT'])
@login_required
def update_post(id):
    try:
        body = request.get_json()
        post = Post.get_by_id(id)
        # print(post, current_user)
        if(post.user != current_user):
            return jsonify(message='Unauthorized!!!'), 401
        (Post.update(**body).where(Post.id == id).execute())
        return jsonify(model_to_dict(Post.get_by_id(id))), 201
    except DoesNotExist:
        return jsonify(message="not found"), 404


@post.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_post(id):
    body = request.get_json()
    # if(Post.user != current_user.id):
    #     return jsonify(message='Unauthorized!!!'), 401
    (Post.delete().where(Post.id == id).execute())
    return jsonify(message='Post has been deleted'), 200
   

# @post.route("/<int:id>", methods=["PUT"])
# @login_required
# def update_post(id):
#     try:
#         body = request.get_json()
#         (Post.update(**body).where(Post.id == id).execute())
#         post = Post.get_by_id(id)
#         return jsonify(model_to_dict(post))
#     except DoesNotExist:
#         return jsonify(message="error getting resources"), 500