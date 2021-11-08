import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import "./Movies.css";
import MoviePage from "./MoviePage";

const Movies = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [ toggleFetch, setToggleFetch ] = useState(false)

  const [movies, setMovies] = useState([
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },

    {
      Title: "Venom: Let There Be Carnage",
      Year: "2021",
      imdbID: "tt7097896",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTc3ZTAwYTgtMmM4ZS00MDRiLWI2Y2EtYmRiZmE0YjkzMGY1XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg",
    },

    {
      Title: "Copshop",
      Year: "2021",
      imdbID: "tt5748448",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTZjZWYzYjMtMmNlYi00MTdkLWI4OTMtMmVhM2QzZjZiZTZiXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg",
    },
    {
      Title: "Candyman",
      Year: "1992",
      imdbID: "tt0103919",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjVjYjhlNTQtN2UxOC00Njk5LWFjNDctODNjZTI1ZGM0ZDZkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },

    {
      Title: "Eternals",
      Year: "2021",
      imdbID: "tt9032400",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTExZmVjY2ItYTAzYi00MDdlLWFlOWItNTJhMDRjMzQ5ZGY0XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_SX300.jpg",
    },
    {
      Title: "Lamb",
      Year: "2021",
      imdbID: "tt9812474",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzYzZTI2YmQtYmZlOS00NDI0LTg5MTktODJkNzc2Yzg0ZmMxXkEyXkFqcGdeQXVyNTQwOTY1MTg@._V1_SX300.jpg",
    },

    {
      Title: "Free Guy",
      Year: "2021",
      imdbID: "tt6264654",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTY2NzFjODctOWUzMC00MGZhLTlhNjMtM2Y2ODBiNGY1ZWRiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    },
    {
      Title: "Dune",
      Year: "1984",
      imdbID: "tt0087182",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTAzYzNlMDMtMGRjYS00M2UxLTk0MmEtYmE4YWZiYmEwOTIwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
    },
  ]);

  const searchMovie = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=the&apikey=fdfd3b22`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    try {
      searchMovie();
    } catch (error) {
      console.error("movies not found!");
    }
  }, [toggleFetch]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value)
  }

  const filteredMovies = movies.filter(movie => 
    movie.Title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div>

      <header className="movie_header">
        <h2>Movies</h2>
        {/* <form className="search_bar" onSubmit={handleChange}>
          <input type="text" id="search" placeholder="movie name?" className="movie_input" />
          <button onChange={(e) => setSearchValue(e.target.value)}>search</button>
        </form> */}
      </header>
    <div className="movie_container">
        {movies.map((movie) => {  
          return (
      <Link  exact to={`/MoviePage/${movie.Poster}`}>
      {/* <div className="movie_poster"> */}
          <Card className="poster"  sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="300"
              image={movie.Poster}
            />
            <h4>{movie.Title}</h4>
            <h5>Release year: {movie.Year}</h5>
            <CardActions>
            </CardActions>
          </Card>
      {/* </div> */}
      </Link>
          )      
        })}
    </div>
    </div>
  );
};

export default Movies;
