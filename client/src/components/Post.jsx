import Favorite from "@mui/icons-material/Favorite";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "../services";
import { updatePost } from "../services";
import { deletePost } from "../services";
import { addFavorite } from "../services";
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./Post.css";

const Post = (props) => {
  const [posts, setPosts] = useState([]);
  const [ favorite, setFavorite ] = useState([])

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
  };

  const addFavoriteMovie = (movie) => {
    const newFavorite = [...favorite, movie]
    setFavorite(newFavorite)
  }


  return (
    <div className="post_page">
      {posts.map((post) => (
        <div className="post_card">
          <div className="titles">
            <div>Movie Title</div>
            <div>Release date</div>
            <div>Director</div>
            <div>Review</div>
            <div>Rating</div>
            <div>Genre</div>
          </div>

          <div className="post_info">
            <div><h3>{post.title}</h3></div>
            <div><h4>{post.release_date}</h4></div>
            <div><h4>{post.director}</h4></div>
            <div><h4>{post.review}</h4></div>
            <div><h4>{post.rating}</h4></div>
            <div> <h4>{post.genre}</h4></div>
          </div>
          <button onClick={() => handleClick(post.id)}>⭐️</button>
          <Link to={`/postForm/${post.id}`}>
            <button>edit</button>
          </Link>
          <button onClick={() => deletePost(post.id)}>delete</button>
          <button className="icon"  type='submit' onClick={handleClick}><FavoriteIcon /></button>
        </div>
      ))}
    </div>
    // <div className="post_body">
    //   <div className="wrapper">
    //     <div className="table" >

    //       <div className="row header">
    //           <div className="cell">
    //             Movie
    //           </div>
    //           <div className="cell">
    //             Release Date
    //           </div>
    //           <div className="cell">
    //             Director
    //           </div>
    //           <div className="cell">
    //             Genre
    //           </div>
    //           <div className="cell">
    //             Review
    //           </div>
    //           <div className="cell">
    //             Rating
    //           </div>
    //       </div>

    //       {posts.map((post) => (
    //       <div className="row">
    //           <div className="cell" data-title="Movie">
    //           {post.title}
    //           </div>
    //           <div className="cell" data-title="Release Date">
    //           {post.releaseDate}
    //           </div>
    //           <div className="cell" data-title="Director">
    //           {post.director}
    //           </div>
    //           <div className="cell" data-title="Genre">
    //           {post.genre}
    //           </div>
    //           <div className="cell" data-title="Review">
    //           {post.review}
    //           </div>
    //           <div className="cell" data-title="Rating">
    //             {post.rating}
    //           </div>
    //       </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Post;
