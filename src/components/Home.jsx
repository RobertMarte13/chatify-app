
import { supabase } from "../supabase/supabase";
import { useNavigate } from "react-router-dom";
import Chats from "./chats/ChatsComponent";

const Home = () => {
  const navigate = useNavigate();

  

  const logoutUser = () => {
    supabase.auth.signOut();
    navigate("/login");
  };


  return (
    <div>
      <h1>HOME</h1>
      <button className="btn-logout" onClick={() => logoutUser()}>
        logout
      </button>
      <Chats />
    </div>
  );
};

export default Home;
