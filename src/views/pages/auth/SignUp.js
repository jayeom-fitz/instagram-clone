import React, { useState } from "react";
import { Link } from "react-router-dom";

import LoginLogo from "components/logo/LoginLogo";
import GoogleLoginButton from "components/buttons/GoogleLoginButton";
import LoginInput from "components/inputs/LoginInput";
import LoginButton from "components/buttons/LoginButton";

function SignUp() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="grow max-w-sm flex flex-col justify-center">
      <div className="mb-2.5 p-2.5 border rounded border-slate-400 bg-slate-100">
        {/* Logo */}
        <LoginLogo />
        <div className="px-10 py-2">
          <p className="text-center font-semibold text-slate-400 text-md">
            친구들의 사진과 동영상을 보려면 가입하세요.
          </p>
        </div>
        <GoogleLoginButton />
        <div className="px-10 pt-2.5 pb-4 flex">
          <div className="grow h-0.5 bg-slate-400 top-2.5 relative" />
          <div className="text-sm font-semibold mx-4 text-slate-500">또는</div>
          <div className="grow h-0.5 bg-slate-400 top-2.5 relative" />
        </div>

        <LoginInput
          type="email"
          name="이메일"
          value={email}
          setValue={setEmail}
        />
        <LoginInput
          type="text"
          name="이름"
          value={fullName}
          setValue={setFullName}
        />
        <LoginInput
          type="text"
          name="사용자 이름"
          value={userName}
          setValue={setUserName}
        />
        <LoginInput
          type="password"
          name="비밀번호"
          value={password}
          setValue={setPassword}
        />

        <LoginButton
          text="가입"
          boolean={email && fullName && userName && password}
          onSubmit={() => alert("aaa")}
        />
      </div>

      <div className="border rounded border-slate-400 bg-slate-100 p-2.5 mb-2.5">
        <p className="text-sm m-4 text-center">
          계정이 있으신가요?
          <Link className="ml-2 text-cyan-500 font-semibold" to="/login">
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
