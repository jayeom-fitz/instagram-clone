import React, { useState } from "react";
import { Link } from "react-router-dom";

import Slider from "./Slider";

import LoginLogo from "components/logo/LoginLogo";
import LoginInput from "components/inputs/LoginInput";
import LoginButton from "components/buttons/LoginButton";
import GoogleLoginButton from "components/buttons/GoogleLoginButton";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("errrr");

  return (
    <>
      <Slider />

      <div className="grow max-w-sm flex flex-col justify-center">
        <div className="mb-2.5 p-2.5 border rounded border-slate-400 bg-slate-100">
          {/* Logo */}
          <LoginLogo />

          {/* Input ID & Password & Buttons */}
          <div className="pt-6 mb-2.5">
            <LoginInput
              type="email"
              name="이메일"
              value={email}
              setValue={setEmail}
            />

            <LoginInput
              type="password"
              name="비밀번호"
              value={password}
              setValue={setPassword}
            />

            <LoginButton
              text="로그인"
              boolean={email && password}
              onSubmit={() => alert("aaa")}
            />

            <div className="px-10 pt-2.5 pb-4 flex">
              <div className="grow h-0.5 bg-slate-400 top-2.5 relative" />
              <div className="text-sm font-semibold mx-4 text-slate-500">
                또는
              </div>
              <div className="grow h-0.5 bg-slate-400 top-2.5 relative" />
            </div>

            <GoogleLoginButton />

            {error && (
              <div className="px-10 py-2">
                <p className="text-center text-red-600 text-md">{error}</p>
              </div>
            )}

            <Link
              className="block text-xs mt-3 text-center text-blue-600"
              to="/"
            >
              비밀번호를 잊으셨나요?
            </Link>
          </div>
        </div>

        <div className="border rounded border-slate-400 bg-slate-100 p-2.5 mb-2.5">
          <p className="text-sm m-4 text-center">
            계정이 없으신가요?
            <Link className="ml-2 text-cyan-500 font-semibold" to="/signUp">
              가입하기
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
