import React from "react";
import { Outlet } from "react-router-dom";

import useLoginCheck from "hooks/use_login_check";

function AuthLayout() {
  useLoginCheck(false, "/");

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex grow">
        <div className="mx-auto my-8 flex items-center justify-center max-w-4xl grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
