import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex grow">
        <div className="mx-8 my-auto flex items-center justify-center max-w-4xl grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
