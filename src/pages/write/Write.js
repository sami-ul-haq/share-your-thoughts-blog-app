import "./Write.css";

const Write = () => {
  return (
    <div className="write">
      <img
        className="write-img"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="write-form">
        <div className="write-form-group">
          <label htmlFor="file-input">
            <i className="write-icon fas fa-plus"></i>
          </label>
          <input
            type="file"
            name="file-input"
            id="file-input"
            style={{ display: "none" }}
          />
          <input
            type="text"
            name="write-input"
            placeholder="Title"
            id="write-input"
            className="write-input"
            autoFocus={true}
          />
        </div>
        <div className="write-form-group">
          <textarea
            placeholder="Tell YOur Story"
            name="text"
            id="text"
            className="write-input write-text"
          ></textarea>
        </div>
        <button className="write-submit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
