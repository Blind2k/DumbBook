import { Fragment } from "react";
import "./UserProfileCollection.css";


const UserProfileCollection = ({ usersInfo }) => {
  const mappedUsersInfo = usersInfo.map((user, index) => {
    return (
      <section>
        <img
          src={`https://robohash.org/${usersInfo[index].Id}.png`}
          id="small-profile"
          alt="user profile in circle"
        />
        <p>
          <u><strong>ID</strong></u> : {usersInfo[index].id}</p>
        <p>Name: {usersInfo[index].name}</p>
        <p>@{usersInfo[index].username}</p>
        <p>Email: {usersInfo[index].email}</p>
        <p>
          {usersInfo[index].address.street} {usersInfo[index].address.suite}
          <br />
          {usersInfo[index].address.zipcode} {usersInfo[index].address.city}
        </p>
      </section>
    );
  });
  console.log({ usersInfo });
  return <Fragment>{mappedUsersInfo}</Fragment>;
};

export default UserProfileCollection;
