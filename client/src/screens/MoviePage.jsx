import React from "react";
import "./MoviePage.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useParams } from "react-router";

const MoviePage = (props) => {
  const params = useParams();

  const movie = props.movies.find((movie) => movie.Poster === params.Poster);
  console.log(movie);

  if (!movie) {
    return <h3>loading...</h3>;
  }

  // const [count, setCount] = useState(0);
  // const [num, setNum] = useState(0);

  // const FavouriteComponent = props.favouriteComponent;

  // const like = () => {
  //   setCount(count + 1);
  // };

  // const dislike = () => {
  //   setNum(num - 1);
  // };


  return (
    <>
      <div>
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image={movie.Poster}
          />
          <h4>{movie.Title}</h4>
          <h5>Release year: {movie.Year}</h5>
          <CardActions>
            {/* <Button size="small" id="likebtn" onClick={() => setCount(like)}>
              <ThumbUpAltIcon />
              {count}
            </Button>
            <Button size="small" onClick={() => setCount(dislike)}>
              <ThumbDownIcon />
              {count}
            </Button> */}
          </CardActions>
        </Card>
      </div>
      {/* {props.movies.map((movie, index) => (
        <div className="image_container d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="movie"></img>
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))} */}
    </>
  );
};

export default MoviePage;
