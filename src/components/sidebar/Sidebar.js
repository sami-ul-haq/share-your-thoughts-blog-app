import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">About Me</span>
        <img src="images/jf172.jpg" alt="sidebar" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
          voluptatem.
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Categories</span>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">Life</li>
          <li className="sidebar-list-item">Music</li>
          <li className="sidebar-list-item">Style</li>
          <li className="sidebar-list-item">Sports</li>
          <li className="sidebar-list-item">Cinema</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Categories</span>
        <div className="sidebar-social">
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-twitter-square"></i>
          <i className="fab fa-pinterest-square"></i>
          <i className="fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
