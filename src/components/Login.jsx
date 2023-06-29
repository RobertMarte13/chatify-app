import { useState } from "react";
import { supabase } from "../supabase/supabase";
import { useNavigate } from "react-router-dom";
import Register from "./Register";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  
  const navigate = useNavigate()

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
        options: {
            emailRedirectTo: '/home'
        }
      });

      if (error) throw Error;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    navigate('/')
  };
  return (
    <div>
      <h1>login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={(evt) => setEmail(evt.target.value)}
          placeholder="emailExample@gmail.com"
        />
        <input
          type="password"
          onChange={(evt) => setPassword(evt.target.value)}
          name="password"
        />
        <button>login</button>
      </form>
      <Register />
    </div>
  );
};

export default Login;
