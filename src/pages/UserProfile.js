const UserProfile = (props) => {
  return (
    <div className="wrap-post">
      <div className="text-group">
        <p>
          <strong>Info</strong>
        </p>
        <p>{props.id}</p>
        <p>{props.name}</p>
        <p>@{props.username}</p>
        <p>
          {/* {props.address.street} {props.address.suite},{" "} */}
        </p>
        <br />
        <p>
          {/* {props.address.zipcode} {props.address.city}{" "} */}
        </p>
        <br />

        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.website}</p>

        <p>{props.company}</p>
      </div>
    </div>
  );
};

export default UserProfile;
