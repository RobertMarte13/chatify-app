import MessagesForm from "./MessagesForm";

// eslint-disable-next-line react/prop-types
const MessagesComponent = ({ resMes, id, usersAll }) => {

  const getUsersAllMessages = (id) => {
    const user = usersAll.filter(user => user.users_id === id)

    return (
      <p>
        {
          user &&
            user.map((user) =>(
              <span key={user.id}>{user.name}</span>
            ))
        }
      </p>
    )
    // console.log(user)
  }

  return (
    <div>
      {resMes &&
        resMes.map((mes) => (
          <div key={mes.id}>
            <h1>{mes.message}</h1>
            {getUsersAllMessages(mes.user_id)}
          </div>
        ))}
      {resMes !== null ? <MessagesForm id={id} /> : null}
    </div>
  );
};

export default MessagesComponent;
