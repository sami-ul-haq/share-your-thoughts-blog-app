import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form">
        <label>Username</label>
        <input
          className="register-input"
          type="text"
          placeholder="Enter Your Username..."
          required
        />
        <label>Email</label>
        <input
          className="register-input"
          type="text"
          placeholder="Enter Your Email..."
          required
        />
        <label>Password</label>
        <input
          className="register-input"
          type="password"
          placeholder="Enter your password..."
          required
        />
        <button className="register-button" type="submit">
          Register
        </button>
      </form>
      <button className="register-login-button">
        <Link to="login" className="g-link">
          LOGIN
        </Link>
      </button>
    </div>
  );
};

export default Register;
