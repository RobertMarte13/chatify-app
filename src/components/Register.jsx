import { supabase } from "../supabase/supabase";

import { useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState(null);
  const [captchaToken, setCaptchaToken] = useState("")

  const captcha = useRef()


  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          captchaToken,
          data: {
            first_name: firstName,
            age: age,
          },
        },
      });
      captcha.current.resetCaptcha();
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
        <HCaptcha 
          ref={captcha}
          sitekey="0d20ccb8-2a3f-4072-93d4-d1ea69ccf30e"
          onVerify={setCaptchaToken}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register
