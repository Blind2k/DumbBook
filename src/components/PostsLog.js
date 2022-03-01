import Post from "./Post";
import "./PostsLog.style.css";

const PostsLog = ({ postsList }) => {

  const mappedPosts = postsList.map((post, i) => {
    return (
      <Post
        key={i}
        id={postsList[i].id}
        userId={postsList[i].userId}
        title={postsList[i].title}
        body={postsList[i].body}
      />
    );
  });

  return <div className="posts-log">{mappedPosts}</div>;
};

export default PostsLog;
