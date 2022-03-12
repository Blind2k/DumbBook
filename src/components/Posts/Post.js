import "./Post.style.css";

const Post = (props) => {
  // Text shorten
  const truncateTitle =
    props.title.length > 70
      ? props.title.substring(0, 80) + "..."
      : props.title;
  const truncateBody =
    props.body.length > 120 ? props.body.substring(0, 120) + "..." : props.body;
  console.log(props);
  
  return (
    <div className="wrap-post">
      <div className="wrapping-top">
        <img
          src={`https://robohash.org/${props.userId}.png`}
          id="small-profile"
          alt="user profile in circle"
        />
        <div className="top-info">
          <h3>{props.name}</h3>
          <h3>{props.nickname}</h3>
          <p>{props.email}</p>
          <p>{props.company}</p>
          <p>{props.website}</p>
        </div>
      </div>
      <div className="post-text">
        <p className="title">
          #{props.id}: {truncateTitle}
        </p>
        <p className="body">"{truncateBody}"</p>
      </div>
    </div>
  );
};

export default Post;
