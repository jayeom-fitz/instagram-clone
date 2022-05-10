import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  GoogleLoginButton,
  LoginButton,
  LoginInput,
  LoginLogo,
} from "components/auth";

import {
  doesUsernameExist,
  setProfile,
  signUpWithEmailAndPassword,
} from "services/user";

function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async () => {
    if (fullname.length > 30 || username.length > 30) {
      setError("이름을 30자 미만으로 입력하세요.");
      return;
    }

    const check = await doesUsernameExist(username);
    if (check > 0) {
      setError("사용할 수 없는 사용자 이름입니다. 다른 이름을 사용하세요.");
      return;
    }

    const result = await signUpWithEmailAndPassword(email, password);

    if (result.error !== undefined) {
      if (result.error === "auth/invalid-email")
        setError("유효한 이메일 주소를 입력하세요");
      if (result.error === "auth/email-already-in-use")
        setError(`다른 계정에서 ${email} 주소를 사용하고 있습니다.`);
      if (result.error === "auth/weak-password")
        setError("6자 이상의 비밀번호를 입력해주세요.");
      return;
    }

    await setProfile(result.uid, fullname, username, "");
    alert("회원 가입이 완료되었습니다.");
    navigate("/login");
  };

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
          value={fullname}
          setValue={setFullname}
        />
        <LoginInput
          type="text"
          name="사용자 이름"
          value={username}
          setValue={setUsername}
        />
        <LoginInput
          type="password"
          name="비밀번호"
          value={password}
          setValue={setPassword}
        />

        <LoginButton
          text="가입"
          boolean={email && fullname && username && password}
          onSubmit={onSubmit}
        />

        {error && (
          <div className="px-10 py-2">
            <p className="text-center text-red-600 text-md">{error}</p>
          </div>
        )}
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
