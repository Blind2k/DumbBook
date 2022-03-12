import Post from "./Post";
import "./PostsLog.style.css";

const PostsLog = ({ usersInfo, usersPosts }) => {
  const mappedPosts = usersPosts.map((post, i) => {
    const findUserInfo = usersInfo.find((user) => user.id === post.userId);

    return (
      <Post
        key={i}
        //the user information
        name={findUserInfo.name}
        nickname={findUserInfo.nickname}
        email={findUserInfo.email}
        company={findUserInfo.company.name}
        website={findUserInfo.website}
        //the post information
        id={usersPosts[i].id}
        userId={usersPosts[i].userId}
        title={usersPosts[i].title}
        body={usersPosts[i].body}
        // Onclick
      />
    );
  });

  return <div className="posts-log">{mappedPosts}</div>;
};

export default PostsLog;
