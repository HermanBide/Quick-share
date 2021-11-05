import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Comments from "./screens/Comments";
import PostForm from "./components/Forms/PostForm";
import CommentForm from "./components/Forms/CommentForm";
// import Landing from "./screens/Landing";
import Movies from "./screens/Movies";
import Favorites from "./screens/Favorites";
import ReviewPage from "./screens/ReviewPage"
import Login from "./screens/Login";
import Register from "./screens/Register";
import { useState } from "react";


function App() {
  const [user, setUser] = useState(null);

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
          <Post user={user}/>
        </Route>

        <Route path="/Comments">
          <Comments user={user}/>
        </Route>

        <Route path="/">
          <Movies user={user}/>
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
