import React from "react";

import useAuthListener from "hooks/use_auth_listener";
import useLoginCheck from "hooks/use_login_check";

import { logout } from "services/user/sign_in";

function MainLayout() {
  const { user } = useAuthListener();
  useLoginCheck(user, true, "/login");

  return (
    <div>
      <div>MainLayout</div>
      <button onClick={() => logout()}>logout</button>
    </div>
  );
}

export default MainLayout;
