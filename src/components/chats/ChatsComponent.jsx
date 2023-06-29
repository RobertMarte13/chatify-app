import { useEffect, useState } from "react";
import MessagesComponent from "./MessagesComponent";

import { useChatContext } from "../../hooks/useChatContext";

// eslint-disable-next-line react/prop-types
const Chats = () => {
  const { chats, messages, getChats, getMessages, usersAll, getUsersAll } = useChatContext();

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
    handleMessages(id)
    getUsersAll()
  }, [getMessages, id]);

  // console.log(usersAll)

  
  return (
    <div>
      {chats.map((chat) => (
        <h1 onClick={() => handleMessages(chat.id)} key={chat.id}>
          {chat.name}
        </h1>
      ))}
      <MessagesComponent resMes={resMes} id={id} usersAll={usersAll} />
    </div>
  );
};

export default Chats;
