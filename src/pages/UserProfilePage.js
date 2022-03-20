import { useParams } from "react-router-dom";
import UserProfileComponent from "../components/UserProfileComponent";

const UserProfilePage = ({ usersInfo }) => {
  const params = useParams();
  if (!usersInfo) {
    return <p>Loading...</p>;
  }
  const foundUser = usersInfo.find(
    (user) => Number(user.id) === Number(params.userId)
  );

  return (
    <div>
      <UserProfileComponent userProfile={foundUser} />
    </div>
  );
};

export default UserProfilePage;
