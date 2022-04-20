import React from "react";
import { FcGoogle } from "react-icons/fc";

import { loginWithGoogleProvider } from 'services/user'

function GoogleLoginButton() {
  
  const onSubmit = () => {
    loginWithGoogleProvider()
  }

  return (
    <div className="px-10 py-2">
      <button className="w-full py-1.5 px-2.5 border border-slate-300 rounded outline-0 flex items-center justify-center bg-transparent" 
      onClick={onSubmit}>
        <FcGoogle className="mr-2" size="24" />
        <span className="text-sm font-semibold text-slate-600">
          Google 로 로그인
        </span>
      </button>
    </div>
  );
}

export default GoogleLoginButton;
