import { Fragment } from "react";
import { useParams } from "react-router-dom"
import UserProfileComponent from "../components/UserProfileComponent";

const UserProfilePage = ({usersInfo}) => {
    const params = useParams();
    const findTheUserParams = usersInfo.find(user => user.id == params.userId)
    return(
        <Fragment>
            <UserProfileComponent userProfile={findTheUserParams} />
        </Fragment>
    )
}

export default UserProfilePage;