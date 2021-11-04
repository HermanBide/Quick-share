import React from "react";
import { useEffect, useState } from "react";
import { getAllPosts } from "../services";
import { updatePost } from "../services";
import { deletePost } from "../services";
import { addFavorite } from "../services";
import "./Post.css";

const Post = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((fetchedPosts) => setPosts(fetchedPosts));
  }, []);

  const handleClick = async (postId, e) => {
    e.preventDefault();
    if (props.user.favorites.find((favorite) => favorite.post.id === postId)) {
      return;
    }
    const user = await addFavorite(postId);
    props.setUser(user);
  }


  return (

  <div className="post_page">
          {posts.map((post) => (
        <div className='post_card'>
          <h3>Movie Title: {post.title}</h3>
          <h4>Release date: {post.releaseDate}</h4>
          <h4>Director: {post.director}</h4>
          <h4>Review: {post.review}</h4>
          <h4>Rating: {post.rating}</h4>
          <h4>Genre: {post.genre}</h4>
          <button onClick={() => handleClick(post.id)}>⭐️</button>
          <Link to={`/postForm/${post.id}`}><button>edit</button></Link>
          <button onClick={() => deletePost(post.id)}>delete</button>
        </div>
      ))}
  </div>
  )
};

export default Post;
