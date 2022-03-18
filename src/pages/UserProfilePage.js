import { useParams } from "react-router-dom"
import UserProfileComponent from "../components/UserProfileComponent";

const UserProfilePage = ({usersInfo}) => {
    const params = useParams();
    const foundUser = usersInfo.find((user) => Number(user.id) === Number(params.userId))
    console.log("found user  ", foundUser);
    // console.log(usersInfo);
    console.log(params, " is params");
    
    return(
        <div>
            <UserProfileComponent userProfile={foundUser}/>
            <p>Yo YO</p>
        </div>
    )
}

export default UserProfilePage;