import "./Post.style.css"

const Post = (props) => {

    return (
        <div className="wrap-post">
            {/* <img src={`https://robohash.org/${nickname}.png`} alt="profile picture"/> */}
            <div>
               <h3>{props.nickname}</h3>
               <h3>{props.privatename} {props.lastname}</h3>
            </div>
            <div>
                {/* <p className="">{popup.posts[0].date}</p>
                <p className="">{popup.posts[0].title}</p>
                <p className="">{popup.posts[0].body}</p> */}
            </div>
        </div>
    )
}

export default Post;