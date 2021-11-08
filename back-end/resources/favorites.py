from peewee import *
from flask import Blueprint, jsonify, request
from playhouse.shortcuts import model_to_dict
from flask_login import current_user, login_required

from favorite import Favorite
from user import User

favorite=Blueprint('favorite', __name__, url_prefix="/favorites")

@favorite.route('/', methods=['GET'])
def get_all_favorites():
    try:
        favorites = [model_to_dict(favorite) for favorite in Favorite.select()]
        return jsonify(favorites), 200
    except DoesNotExist:
        return jsonify(error='Error getting the favorite resource!'), 500

@favorite.route('/new', methods=['POST'])
@login_required
def create_favorite():
    body = request.get_json()
    favorite = Favorite.create(**body, user=current_user.id)
    favorite_dict = model_to_dict(favorite, exclude=[User.password])
    return jsonify(favorite_dict), 201

@favorite.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_favorite(id):
    body = request.get_json()
    # if(Post.user != current_user.id):
    #     return jsonify(message='Unauthorized!!!'), 401
    (Favorite.delete().where(Favorite.id == id).execute())
    return jsonify(message='one of your favorites has been deleted'), 200