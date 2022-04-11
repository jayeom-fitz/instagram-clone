import React, { useState } from "react";

import Logo from "assets/images/logo/logo-light.png";

import SignUpInput from "components/inputs/SignUpInput";
import LoginButton from "components/buttons/LoginButton";

import Slider from "./Slider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Slider />

      <div className="grow max-w-sm flex flex-col justify-center">
        <div className="mb-2.5 p-2.5 border rounded border-slate-400 bg-slate-100">
          {/* Logo */}
          <div className="text-center w-44 h-12 mx-auto mt-6 mb-3.5">
            <img className="max-w-full" src={Logo} alt="Logo" />
          </div>

          {/* Input ID & Password & Button */}
          <div className="pt-6 mb-2.5">
            <SignUpInput
              type="email"
              name="Email"
              value={email}
              setValue={setEmail}
            />

            <SignUpInput
              type="password"
              name="Password"
              value={password}
              setValue={setPassword}
            />

            <LoginButton
              boolean={email && password}
              onSubmit={() => alert("aaa")}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
