/* eslint-disable react/prop-types */
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const GetUsersAllMessages = ({ id, usersAll }) => {
  const [user, setUser] = useState([]);

  if (usersAll !== undefined || usersAll === null) {
    setUser(usersAll.filter((user) => user.users_id === id));
  }

  return (
    <p>
      {user !== undefined || user !== null
        ? user.map((user) => <span key={user.id}>{user.name}</span>)
        : null}
    </p>
  );
  // console.log(user)
};

export default GetUsersAllMessages;
