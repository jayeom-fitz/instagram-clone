import React from "react";

import Logo from "assets/images/logo/logo-light.png";

function LoginLogo() {
  return (
    <div className="text-center w-44 h-12 mx-auto mt-6 mb-3.5">
      <img className="max-w-full" src={Logo} alt="Logo" />
    </div>
  );
}

export default LoginLogo;
