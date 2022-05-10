import React from "react";
import { Link } from "react-router-dom";

import Logo from "assets/images/logo/logo-light.png";

function HeaderLogo() {
  return (
    <div className="text-center w-28 h-8 align-center">
      <Link to="/">
        <img className="max-w-full" src={Logo} alt="Logo" />
      </Link>
    </div>
  );
}

export default HeaderLogo;
