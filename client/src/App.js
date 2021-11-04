import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Comments from "./components/User/Comments";
import PostForm from "./components/Forms/PostForm";
import CommentForm from "./components/Forms/CommentForm";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { useState } from "react";
import Movie from "./components/Movie";

function App() {
  const [user, setUser] = useState(null);

  return (

    <div className="App">
     <Navbar user={user} setUser={setUser} />

      <Switch>
        <Route path="/register">
          <Register setUser={setUser} />
        </Route>

        <Route path="/login">
          <Login setUser={setUser} />
        </Route>

        <Route path="/">
          <Post setUser={setUser}/>
        </Route>

        <Route path="/Movie">
          <Movie />
        </Route>

        <Route path="/PostForm">
          <PostForm setUser={setUser}/>
        </Route>

        <Route path="/PostForm/:id">
          <PostForm setUser={setUser}/>
        </Route>

        <Route path="/CommentForm">
          <CommentForm  setUser={setUser}/>
        </Route>

        <Route path="/Comments">
          <Comments setUser={setUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
