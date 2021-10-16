import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-titles">
        <span className="head-tile-sm">Share Your Thoughts</span>
        <span className="head-tile-lg">Blog</span>
      </div>
      <img
        src="https://source.unsplash.com/random"
        alt="header"
        className="header-image"
      />
    </header>
  );
};

export default Header;
