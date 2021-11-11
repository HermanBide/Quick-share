import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { createPost, getPostById, updatePost } from "../../services";
import "./PostForm.css";

const PostForm = (props) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [releaseDate, setReleaseDate] = useState(null);
  const [review, setReview] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(0);
  const history = useHistory();
  const params = useParams();
  const postId = params.id;

  useEffect(() => {
    if (postId) {
      getPostById(postId).then((post) => {
        setTitle(post.title);
        setDirector(post.director);
        setReleaseDate(post.release_date);
        setReview(post.review);
        setGenre(post.genre);
        setRating(post.rating);
      });
    }
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      director,
      release_date: releaseDate,
      review,
      rating,
      genre,
    };
    if (postId) {
      await updatePost(newPost, postId);
    } else {
      await createPost(newPost);
    }
    history.push("/Post");
  };
  return (
    <div className="review_body">

      <div className="form-box">
        <form className="form-form" onSubmit={handleSubmit}>
        <h4>Write a review on a movie</h4>

            <br /> 
            <input
              className="form-control"
              autoComplete="off"
              id="title"
              tabIndex="1"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Movie title"
            />

            <br />
            <input
            autoComplete="off"
              id="date"
              tabIndex="1"
              className="form-control"
              type="number"
              min={1970}
              max={2021}
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.valueAsNumber || 0)}
              required
              placeholder="Release year"
            />

            <br />
            <input
              className="form-control"
              autoComplete="off"
              id="director"
              tabIndex="1"
              type="text"
              value={director}
              onChange={(e) => setDirector(e.target.value)}
              required
              placeholder="who directed this movie ?"
            />


            <br />
            <textarea
              type="message"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
              tabIndex="3"
                    cols="40"
                    rows="10"
                    placeholder="write your review"
            />

            <br />
            <input
              className="form-control"
              autoComplete="off"
              tabIndex="1"
              id="genre"
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
              placeholder="genre"
            /> <br/>
          
            {/* <div>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (    id="title"
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
            <br />
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
          <button type="submit" className="form_button">
            submit
          </button>
        </form>
      </div>
      {/* <Link to="/postForm">review a movie</Link> */}
    </div>
  );
};

export default PostForm;
