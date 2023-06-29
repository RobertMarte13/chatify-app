import { supabase } from "../supabase/supabase";

import { useState } from "react";

const Logout = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState(null);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            first_name: firstName,
            age: age,
          },
        },
      });

      if (error) throw Error;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Logout</h1>
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
        <input
          type="text"
          onChange={(evt) => setFirstName(evt.target.value)}
          name="firstname"
          placeholder="First Name"
        />
        <input
          type="number"
          onChange={(evt) => setAge(evt.target.value)}
          name="age"
          placeholder="Enter your age"
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Logout;
