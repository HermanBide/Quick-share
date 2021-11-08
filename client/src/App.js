import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Comments from "./screens/Comments";
import PostForm from "./components/Forms/PostForm";
import CommentForm from "./components/Forms/CommentForm";
import Movies from "./screens/Movies";
import Favorites from "./screens/Favorites";
import ReviewPage from "./screens/ReviewPage"
import Login from "./screens/Login";
import Register from "./screens/Register";
import MoviePage from "./screens/MoviePage";
import { useState } from "react";

// const URL = "https://api.themoviedb.org/3/movie/550?api_key=51b72b768de8f0026f5b89be1c2cd297"

// const images = "https://image.tmdb.org/t/p/w1280"
// const search = "htts://api.themoviedb.org/3/search/movie?&api_key=51b72b768de8f0026f5b89be1c2cd297&query="

function App(props) {
  const [user, setUser] = useState(null);
  const [ toggleFetch, setToggleFetch ] = useState(false)

  return (
    <div className="App">
     <Navbar user={user} setUser={setUser} />

      <Switch>
      {/*REGISTRATION & LOGIN */}
        <Route path="/register">
          <Register setUser={setUser} />
        </Route>

        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
       {/*REGISTRATION & LOGIN */}

      {/*FORMS */}
        <Route exact path="/PostForm">
          <PostForm setUser={setUser}/>
        </Route>

        <Route path="/PostForm/:id">
          <PostForm setUser={setUser}/>
        </Route>

        <Route path="/CommentForm">
          <CommentForm  setUser={setUser}/>
        </Route>

        <Route path="/CommentForm">
          <CommentForm  setUser={setUser}/>
        </Route>
      {/*FORMS */}

        <Route path="/Post">
          <Post user={user} />
        </Route>

        <Route path="/Comments">
          <Comments user={user}/>
        </Route>

        <Route path="/">
          <Movies user={user}/>
        </Route>

        <Route path="/MoviePage">
          <MoviePage user={user} setToggleFetch={setToggleFetch}/>
        </Route>

        <Route path="/Favorites">
          <Favorites user={user}/>
        </Route>

        <Route path="/ReviewPage">
          <ReviewPage user={user}/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
