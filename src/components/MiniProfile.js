import "./Post.style.css";

const MiniPro = (props) => {
  return (
    <div className="text-group">
      {/* <img idsrc={`https://robohash.org/${props.nickname}.png`} alt="user profile"/> */}
      <img
        src={`https://robohash.org/${props.userId}.png`}
        id="small-profile"
      />
      <div>
        <h3 className="user-id">{props.userId}</h3>
        <h3 className="nickname">{props.nickname}</h3>
        <h3 className="email">{props.email}</h3>
      </div>
    </div>
  );
};

export default MiniPro;