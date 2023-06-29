import MessagesForm from "./MessagesForm";
import GetUsersAllMessages from "./UserNameMessages"

// eslint-disable-next-line react/prop-types
const MessagesComponent = ({ resMes, id, usersAll }) => {

  // console.log(vesInput)


  return (
    <div>
      {resMes &&
        // eslint-disable-next-line react/prop-types
        resMes.map((mes, index) => (
          <div key={index}>
            <h1>{mes.message}</h1>
            <GetUsersAllMessages id={mes.user_id} usersAll={usersAll}/>
          </div>
        ))}
      <MessagesForm id={id} />
    </div>
  );
};

export default MessagesComponent;
