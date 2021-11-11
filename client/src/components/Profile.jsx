import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllPosts } from "../services";
import { deletePost } from "../services";
import { addFavorite } from "../services";

const Profile = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getAllPosts();
      const filtered = posts.filter(
        (post) => post.user.id === props.user?.id
      );
      setPosts(filtered);
    };
    fetchPosts();
  }, [props.user]);

  const handleClick = async (postId, e) => {
    e.preventDefault();
    if (props.user.favorites.find((favorite) => favorite.post.id === postId)) {
      return;
    }
    const user = await addFavorite(postId);
    props.setUser(user);
  };

  return (
    <div>
      {posts.map((post) => (
        <div className="post_card">
          {/* <h4 style={{ color: "#4895ef" }}>{props.user.username}</h4> */}
          <div className="titles">
            <div className="Review_div">Movie Title</div>
            <div className="Review_div">Release date</div>
            <div className="Review_div">Director</div>
            <div className="Review_div">Review</div>
            <div className="Review_div">Rating</div>
            <div className="Review_div">Genre</div>
          </div>

          <div className="post_info">
            <div className="Review_div">
              <h3>{post.title}</h3>
            </div>
            <div className="Review_div">
              <h4>{post.release_date}</h4>
            </div>
            <div className="Review_div">
              <h4>{post.director}</h4>
            </div>
            <div>
              <h4>{post.review}</h4>
            </div>
            <div className="Review_div">
              <h4>{post.rating}/5</h4>
            </div>
            <div className="Review_div">
              {" "}
              <h4>{post.genre}</h4>
            </div>
          </div>
          <button onClick={() => handleClick(post.id)}>⭐️</button>
          <Link to={`/postForm/${post.id}`}>
            <button>edit</button>
          </Link>
          <button
            onClick={() => {
              deletePost(post.id);
            }}
          >
            delete
          </button>
          {/* <button className="icon"  type='submit' onClick={handleClick}><FavoriteIcon /></button> */}
        </div>
      ))}
    </div>
  );
};

export default Profile;
