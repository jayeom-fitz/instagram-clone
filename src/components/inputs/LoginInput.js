import React from "react";

function LoginInput({ type, name, value, setValue }) {
  return (
    <div className="px-10 mb-1.5">
      <div className="h-9 border border-slate-400 rounded relative">
        <span
          className={`absolute left-2 h-full text-xs leading-9 text-slate-400 origin-left ease-in-out pointer-events-none ${
            value && "scale-75 -translate-y-2.5"
          }`}
        >
          {name || "name"}
        </span>
        <input
          className={`w-full h-full p-2 border-0 outline-0 bg-slate-100 text-slate-800 ${
            value && "pt-3.5 pr-0 pb-0.5 pl-2"
          }`}
          type={type || "text"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default LoginInput;
