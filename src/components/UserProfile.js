const UserProfile = (props) => {

    return (
        <div className="wrap-post">
            <img src={`https://robohash.org/${props.usersList.users.user1.nickname}.png`} alt="profile picture"/>
            <div className="text-group">
               <h3>{props.usersList.users.user1.id}</h3>
               <h3>{props.usersList.users.user1.privatename} {props.usersList.users.user1.lastname}</h3>
            </div>
            <div className="text-group">
                <p className="">{props.usersList.users.user1.Email}</p>
                <p className="">{props.usersList.users.user1.birthday}</p>
                <div className="text-group">
                <p className="">{props.usersList.users.user1.popup.hobbies[0].art}</p>
                <p className="">{props.usersList.users.user1.popup.hobbies[0].exp}</p>
                <p className="">{props.usersList.users.user1.popup.hobbies[0].achivment}</p>
            </div>
        </div>
    </div>
    )
}

export default UserProfile;