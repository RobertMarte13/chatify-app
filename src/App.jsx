import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import { supabase } from "./supabase/supabase";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import { ChatContextProvaider } from "./context/ChatContext";
import Profile from "./components/profile/Profile";
import CreateProfile from "./components/profile/CreateProfile";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [session, setSession] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: session }) => {
      setSession(session);
      if (session.session === null || session.session === undefined) {
        navigate("/chatify-app/login");
      }

    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <div className="App">
        <ChatContextProvaider>
          <Routes>
            <Route path="/chatify-app/login" element={<Login />} />
          </Routes>
        </ChatContextProvaider>
      </div>
    );
  } else {
    return (
      <div className="App">
        <nav>
          <Navbar />
        </nav>
        <ChatContextProvaider>
          <Routes>
            <Route path="/chatify-app/" element={<Home />} />
            <Route path="/chatify-app/home" element={<Home />} />
            <Route path="/chatify-app/profile" element={<Profile />} />
            <Route path="/chatify-app/create_profile" element={<CreateProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ChatContextProvaider>
      </div>
    );
  }
}

export default App;
