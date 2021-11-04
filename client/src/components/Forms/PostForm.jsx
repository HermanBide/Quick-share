import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { createPost, getAllPosts, updatePost } from "../../services";
import "./PostForm.css";

const PostForm = (props) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [releaseDate, setReleaseDate] = useState();
  const [review, setReview] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(null);
  const history = useHistory();
  const params = useParams()
  const postId = params.id
  
  useEffect(() => {
    if(postId) {
      getAllPosts(postId).then((post) => {
        setTitle(post.title);
        setDirector(post.director);
        setReleaseDate(post.releaseDate);
        setReview(post.review);
        setGenre(post.genre);
        setRating(post.rating);
      });
    }
  }, [postId])

  const handleSubmit = async (e) => {
      e.preventDefault();
      const newPost = {
        title,
        director,
        releaseDate,
        review,
        rating,
        genre,
      };
      if (postId) {
        await updatePost(postId)
      } else {
        await createPost(postId, newPost);
      }
      history.push("/Post");
  };
  return (
    <div className="review_body">
      <form className="review_form" onSubmit={handleSubmit}>
        <label>Movie Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Release date</label>
        <input
          type="number"
          min={2000}
          max={2021}
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.valueAsNumber)}
          required
        />

        <label>Director</label>
        <input
          type="text"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          required
        />

        <label>Review</label>
        <textarea
          type="text"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        />

        <label htmlFor="genre">Genre:</label>
        <input
          id="genre"
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
        {/* <label>Genre</label>
        <select >
          <option>Action</option>
          <option>Adventure</option>
          <option>Animation</option>
          <option>Comedy</option>
          <option>Crime</option>
          <option>Documentary</option>
          <option>Drama</option>
          <option>Eastern</option>
          <option>Erotic</option>
          <option>Family</option>
          <option>Fantasy</option>
          <option>Foriegn</option>
          <option>History</option>
          <option>Holiday</option>
          <option>Horror</option>
          <option>Musical</option>
          <option>Mystery</option>
          <option>Romance</option>
          <option>Science Fiction</option>
          <option>Sport</option>
          <option>Suspence</option>
          <option>Tv Movie</option>
          <option>Thriller</option>
          <option>War</option>
          <option>Western</option>
        </select> */}

        {/* <div>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <StarIcon
                  className="star"
                  color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                  size={5}
                />
              </label>
            );
          })}
        </div> */}

        <label htmlFor="rating">rating: {rating}/5</label>
        <input
          type="range"
          id="rating"
          required
          step={1}
          min={1}
          max={5}
          value={rating}
          onChange={(e) => setRating(e.target.valueAsNumber)}
        />
        <button>submit</button>
      </form>
      {/* <Link to="/postForm">review a movie</Link> */}
    </div>
  );
};

export default PostForm;
