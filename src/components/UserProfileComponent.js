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
          src={`https://robohash.org/${userProfile.Id}.png`}
          id="small-profile"
          alt="user profile in circle"
        />
        <p><u><strong>ID</strong></u> : {userProfile.id}</p>
        <p>Name: {userProfile.name}</p>
        <p>@{userProfile.username}</p>
        <p>Email: {userProfile.email}</p>
        <p>
          {userProfile.address.street} {userProfile.address.suite}<br/>
          {userProfile.address.zipcode} {userProfile.address.city}
        </p>
        <p>Global position</p>
        <p>{userProfile.address.geo.lat}, {userProfile.address.geo.lang}</p>
        <p>{userProfile.phone}</p>
        <p>{userProfile.website}</p>
        <p>Company</p>
        <p>{userProfile.company.name}</p>
        <p>{userProfile.company.catchPhrase}</p>
        <p>{userProfile.company.bs}</p> */}
      </div>
    </div>
  );
};

export default UserProfileComponent;
