import React, { useState } from "react";
import { Link } from "react-router-dom";

import Slider from "./Slider";

import {
  GoogleLoginButton,
  LoginButton,
  LoginInput,
  LoginLogo,
} from "components/auth";

import { loginWithEmailAndPassword } from "services/user";

function Login() {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("test1234");
  const [error, setError] = useState("");

  const onSubmit = async () => {
    const result = await loginWithEmailAndPassword(email, password);

    if (result.error !== undefined) {
      if (result.error === "auth/invalid-email")
        setError("유효한 이메일 주소를 입력하세요");
      if (result.error === "auth/user-not-found")
        setError(
          "입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다. 사용자 이름을 확인하고 다시 시도하세요."
        );
      if (result.error === "auth/wrong-password")
        setError("잘못된 비밀번호입니다. 다시 확인하세요.");
      return;
    }
  };

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
              onSubmit={onSubmit}
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

            {/* <Link
              className="block text-xs mt-3 text-center text-blue-600"
              to="/"
            >
              비밀번호를 잊으셨나요?
            </Link> */}
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
