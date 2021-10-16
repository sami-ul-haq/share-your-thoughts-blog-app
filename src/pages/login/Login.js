import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="login-input"
          placeholder="Enter Your Email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="login-input"
          placeholder="Enter Your password"
          required
        />
        <button className="login-button">Login</button>
      </form>
      <button className="login-register-button">
        <Link to="register" className="g-link">
          REGISTER
        </Link>
      </button>
    </div>
  );
};

export default Login;
