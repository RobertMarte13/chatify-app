import { useEffect, useState } from "react";
import MessagesComponent from "./MessagesComponent";

import { useChatContext } from "../../hooks/useChatContext";

// eslint-disable-next-line react/prop-types
const Chats = () => {
  const { chats, messages, getChats, getMessages, usersAll, getUsersAll, getUsersAllId } =
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
    getUsersAllId()
  }, [getMessages, getChats, id]);


  return (
    <div>
      <div>
        {
          chats &&
          chats.map((chat, index) => (
          <h1 key={index} onClick={() => handleMessages(chat.id)}>
            {chat.name}
          </h1>
        ))}
      </div>
      <MessagesComponent resMes={resMes} id={id} usersAll={usersAll}  />
    </div>
  );
};

export default Chats;
