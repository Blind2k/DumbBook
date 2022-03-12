const UserProfileComponent = ({userProfile}) => {
  console.log(userProfile)

  return (
    <div className="text-group">
        <div className="wrap-post">
        <p>
          <strong>Info</strong>
          {userProfile.id}
        </p>
        {/* <img
          src={`https://robohash.org/${props.userProfile.Id}.png`}
          id="small-profile"
          alt="user profile in circle"
        /> */}
        {/* <p><u><strong>ID</strong></u> : {props.userProfile.id}</p> */}
        {/* <p>Name: {props.userProfile.name}</p> */}
        {/* <p>@{props.userProfile.username}</p> */}
        {/* <p>Email: {props.userProfile.email}</p> */}
        <p>
          {/* {props.userProfile.address.street} {props.userProfile.address.suite}<br/> */}
          {/* {props.userProfile.address.zipcode} {props.userProfile.address.city} */}
        </p>
        <p>Global position</p>
        {/* <p>{props.userProfile.address.geo.lat}, {props.userProfile.address.geo.lang}</p> */}
        {/* <p>{props.userProfile.phone}</p> */}
        {/* <p>{props.userProfile.website}</p> */}
        <p>Company</p>
        {/* <p>{props.userProfile.company.name}</p> */}
        {/* <p>{props.userProfile.company.catchPhrase}</p> */}
        {/* <p>{props.userProfile.company.bs}</p> */}
      </div>
    </div>
  );
};

export default UserProfileComponent;
