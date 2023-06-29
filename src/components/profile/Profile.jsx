import { useEffect } from "react";
import { useChatContext } from "../../hooks/useChatContext";

const Profile = () => {

    const {usersAll, getUsersAll, userId} = useChatContext()

    useEffect(() => {
        getUsersAll()
    }, [getUsersAll])

    return (
        <div>
          {
            usersAll &&
            usersAll.map((user) => (
                <h3 key={user.id}>{userId === user.users_id ? user.name : null}</h3>
            ))
          }
        </div>
    );
}

export default Profile;
