import { useState } from "react";
import { register } from "../services";
import { Link, useHistory } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import "./Register.css";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password,
    };
    const user = await register(newUser);
    props.setUser(user);
    history.push("/");
  };
  return (
    <section className="signup-section">
      <div className="main_page">
        <Link to="/">
          <HomeIcon className="icon" />
        </Link>
      </div>

      <h3>Register for an account!</h3>
      <div className="form-box">
        <form onSubmit={handleSubmit} className="signup-form">
          <label htmlFor="username">Username: </label>
          <input
            className="reg-form-control"
            id="username"
            placeholder="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            className="reg-form-control"
            id="email"
            placeholder="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            className="reg-form-control"
            id="password"
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="signup-btn" type="submit">
            Sign up!
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
