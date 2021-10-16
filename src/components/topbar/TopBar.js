import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/GlobalContext";
import "./TopBar.css";

const TopBar = () => {
  const { changeUserState, state, logoutUser } = useContext(UserContext);
  const user = state;
  return (
    <div className="top">
      <div className="top-left">
        {/* <i className="fab fa-facebook-square"></i>
        <i className="fab fa-twitter-square"></i>
        <i className="fab fa-pinterest-square"></i>
        <i className="fab fa-instagram-square"></i> */}

        <button onClick={() => changeUserState()}>
          {user ? "Logout State" : "Login State"}
        </button>
      </div>
      <div className="top-center">
        <ul className="navbar">
          <li className="navbar-item">
            <Link to="/" className="g-link">
              HOME
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="g-link">
              ABOUT
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/" className="g-link">
              CONTACT
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/write" className="g-link">
              WRITE
            </Link>
          </li>
          <li className="navbar-item" onClick={() => logoutUser()}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <Link to="settings" className="g-link">
            <img
              src="https://source.unsplash.com/random/40x40"
              alt="profile"
              className="profile-pic"
            />
          </Link>
        ) : (
          <>
            <ul className="navbar">
              <li className="navbar-item">
                <Link to="/login" className="g-link">
                  LOGIN
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/register" className="g-link">
                  REGISTER
                </Link>
              </li>
            </ul>
          </>
        )}
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
