import { createContext, useState } from "react";
import { supabase } from "../supabase/supabase";

export const ChatContext = createContext();

// eslint-disable-next-line react/prop-types
export const ChatContextProvaider = ({ children }) => {
  const [chats, setChats] = useState([]);
  const [users, setUsers] = useState({});
  const [usersAll, setUsersAll] = useState([]);
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState(async () => {
    try {
      const data = await supabase.auth.getUser();
      const { id } = data.data.user;
      setUserId(id);
    } catch (error) {
      console.log(error);
    }
  });

  const getChats = async () => {
    const { data } = await supabase.from("chats").select();

    setChats(data);
  };

  const getMessages = async () => {
    const { data } = await supabase.from("messages").select();

    // .eq("message_id", message_id);

    setMessages(data);

    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUsers(user.user_metadata);
  };

  const createMessages = async (message, id) => {
    // console.log(message, id);
    try {
      const newMessage = await supabase.from("messages").insert({
        message: message,
        message_id: id,
        user_id: userId,
      });

      if (newMessage.status !== 201) throw Error;
    } catch (error) {
      console.log(error);
    }
  };

  const createUsers = async (name) => {
    // console.log(message, id);
    try {
      const newUsers = await supabase.from("users_name").insert({
        name: name,
        users_id: userId
      })
      if (newUsers.status !== 201) throw Error;
    } catch (error) {
      console.log(error);
    }
  };

  const getUsersAll = async () => {
    const { data } = await supabase.from("users_name").select();

    setUsersAll(data);

    // const {
    //   data: { user },
    // } = await supabase.auth.getUser();
    // setUsers(user.user_metadata);
  };

  return (
    <ChatContext.Provider
      value={{ chats, messages, users, getChats, getMessages, createMessages, createUsers, getUsersAll, usersAll, userId }}
    >
      {children}
    </ChatContext.Provider>
  );
};
