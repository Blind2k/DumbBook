import "./Post.style.css"

const Post = (props) => {
    const truncate = props.body.length > 120 && props.body.substring(0, 120) + "..."


    return (
        <div className="wrap-post">
            {/* <img src={`https://robohash.org/${props.nickname}.png`} alt="user profile"/> */}
            <div className="text-group">
                <img src={`https://robohash.org/${props.userId}.png`} id="small-profile"/>
                <div>
                    <h3 className="user-id">{props.userId}</h3>
                    <h3 className="user-name">{props.nickname}</h3>
                    <h3 className="user-email">{props.email}</h3>
                </div>
            </div>
            <div className="text-group">
                <h3 className="post-id">Post #{props.id}</h3>
                <p className="post-title"><strong>{props.title}</strong></p>
                <p className="post-body">{truncate}</p>
            </div>
        </div>
    )
}

export default Post;
