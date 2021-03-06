import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../services";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
// import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NoteIcon from "@mui/icons-material/Note";
import "./Navbar.css";

const Navbar = (props) => {
  const handleClick = async (e) => {
    e.preventDefault();
    await logout();
    props.setUser(null);
  };
  return (
    <div className="nav">
      {props.user ? (
        <>
          <nav className="navbar">
            <div className="user-div">
              <Link to="/Profile">
                <AccountCircleIcon style={{ color: "darkgrey" }} />
                <h4 style={{ color: "#4895ef" }}>{props.user.username}!</h4>
              </Link>
            </div>

            <div className="navbar-one">
              <ul className="nav_links">
                <li>
                  <Link to="/Movies" className="navItem">
                    <h3 color={"red"}>Home </h3>
                  </Link>
                </li>
                <li>
                  <Link to="/PostForm" className="navItem">
                    Post a review
                  </Link>
                </li>
                <li>
                  <Link to="/Favorites" className="navItem">
                    favorites
                  </Link>
                </li>
                <li>
                  <Link to="/Post" className="navItem">
                    Posts
                  </Link>
                </li>
              </ul>

            </div>
            <div className="navbar-two">
              <header className="home-header">
                <button id="logout-btn" onClick={handleClick}>
                  Logout
                </button>
              </header>
            </div>
          </nav>
          <header>
            <div className="mobile_nav">
              <ul className="nav_links">
                <li>
                  <Link to="/Movies" className="navItem">
                    <HomeIcon className="icon" />
                  </Link>
                  <Link to="/Favorites" className="navItem">
                    <FavoriteIcon className="icon" />
                  </Link>
                  <Link to="/PostForm" className="navItem">
                    <NoteIcon className="icon" />
                  </Link>
                  <Link to="/Post" className="navItem">
                    <BorderColorIcon className="icon" />
                  </Link>
                </li>
              </ul>
            </div>
          </header>
        </>
      ) : (
        <>
          <nav className="navbar">
            <div className="button">
              <Link to="/login">
                <button id="landing-btn">Login</button>
              </Link>
              <Link to="/register">
                <button id="landing-btn">Register</button>
              </Link>
            </div>
          </nav>
        </>
      )}
    </div>
  );
};

export default Navbar;
