import React from "react";
import { useEffect, useState } from "react";
import { getAllPosts } from "../services";
import { updatePost } from "../services";
import { deletePost } from "../services";
import { addFavorite } from "../services";
import "./Post.css";

import Movie from "./Movie";

const Post = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((fetchedPosts) => setPosts(fetchedPosts));
  }, []);

  const handleClick = async (postId) => {
    if (props.user.favorites.find((favorite) => favorite.post.id === postId)) {
      return;
    }
    const user = await addFavorite(postId);
    props.setUser(user);
  }


  return (

  <div className="post_page">
          {posts.map((post) => (
        <div>
          <h3>{post.title}</h3>
          <h4>{post.releaseDate}</h4>
          <h4>{post.director}</h4>
          <h4>{post.review}</h4>
          <h4>{post.rating}</h4>
          <h4>{post.genre}</h4>
          <button onClick={() => handleClick(post.id)}>⭐️</button>
          <button onClick={updatePost}>edit</button>
          <button onClick={deletePost}>delete</button>
        </div>
      ))}
  </div>
  )
};

export default Post;
