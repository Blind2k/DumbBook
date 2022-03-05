const UserProfile = (props) => {

    return (
        <div className="wrap-post">
            <img src="" alt="user profile"/>
            <div className="text-group">
               <p>{usersList.id}</p>
               <p>{usersList.name}</p>
               <p>app/{usersList.username}</p>
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
/*
"id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }