import "./Post.style.css"

const Post = (props) => {
    const truncate = props.body.length > 120 && props.body.substring(0, 120) + "..."


    return (
        <div className="wrap-post">
            {/* <img idsrc={`https://robohash.org/${props.nickname}.png`} alt="profile picture"/> */}
            <div className="text-group">
                <img src={`https://robohash.org/${props.userId}.png`} id="small-profile"/>
                <div>
                    <h3 className="name">userId</h3>
                    <h3 className="name">nickname</h3>
                </div>
            </div>
            <div className="text-group">
                <h3 className="id">Post #{props.id}</h3>
                <p className="title"><strong>{props.title}</strong></p>
                <p className="body">{truncate}</p>
            </div>
        </div>
    )
}

export default Post;