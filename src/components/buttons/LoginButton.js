import React from "react";

function LoginButton({ boolean, onSubmit }) {
  return (
    <div className="px-10 py-2">
      <button
        className={`w-full border text-sm py-1.5 px-2.5 rounded text-slate-50 font-semibold active:bg-cyan-400
              ${boolean ? "bg-cyan-500" : "bg-cyan-200"}`}
        disabled={!boolean}
        onClick={onSubmit}
      >
        로그인
      </button>
    </div>
  );
}

export default LoginButton;
