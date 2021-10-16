import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://source.unsplash.com/random/720x720"
        alt="jf17"
        className="post-image"
      />
      <div className="post-info">
        <div className="post-cats">
          <span className="post-cat">Music</span>
          <span className="post-cat">Life</span>
        </div>
        <span className="post-title">JF 17 With Refuling Probe</span>
        <span className="post-date">1 hr Ago</span>
        <hr />
      </div>
      <p className="post-desription">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque eos
        dolorem animi nam fuga nihil eveniet assumenda officiis optio quos,
        dolores consectetur consequatur laudantium et libero rerum, tempore
        temporibus recusandae.
      </p>
    </div>
  );
};

export default Post;
