import React from "react";

import useLoginCheck from "hooks/use_login_check";

import { logout } from "services/user/sign_in";

import Header from "components/header";

function MainLayout() {
  useLoginCheck(true, "/login");

  return (
    <div className="bg-gray-100">
      <Header />
      <div>MainLayout</div>
      <button onClick={() => logout()}>logout</button>
    </div>
  );
}

export default MainLayout;
