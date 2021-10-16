import Sidebar from "../../components/sidebar/Sidebar";
import "./Settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="settings-title-update">Update Your Account</span>
          <span className="settings-title-delete">Delete Account</span>
        </div>
        <form className="settings-form">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPP-icon far fa-user-circle"></i>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPP-input"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Sami" name="name" />
          <label>Email</label>
          <input type="email" placeholder="sami@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settings-submit-button" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
