import { useEffect, useState } from "react";
import MessagesComponent from "./MessagesComponent";

import { useChatContext } from "../../hooks/useChatContext";

// eslint-disable-next-line react/prop-types
const Chats = () => {
  const { chats, messages, getChats, getMessages, usersAll, getUsersAll } =
    useChatContext();

  const [resMes, setResMes] = useState(null);
  const [id, setId] = useState(0);

  const handleMessages = (id) => {
    // eslint-disable-next-line react/prop-types

    const data = messages.filter((mes) => mes.message_id === id);

    setResMes(data);
    setId(id);
    getMessages();
  };

  // console.log(messages[0])
  useEffect(() => {
    getChats();
    getMessages();
    handleMessages(id);
    getUsersAll();
  }, [getMessages, id]);


  return (
    <div>
      <div>
        {chats.map((chat) => (
          <h1 onClick={() => handleMessages(chat.id)} key={chat.id}>
            {chat.name}
          </h1>
        ))}
      </div>
      <MessagesComponent resMes={resMes} id={id} usersAll={usersAll}  />
    </div>
  );
};

export default Chats;
