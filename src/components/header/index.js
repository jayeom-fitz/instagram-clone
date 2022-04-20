import React from "react";

import MainLogo from "components/logo/MainLogo";

function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-300">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between items-center align-center h-full">
          <MainLogo />
          <div>Header</div>
          <div>Header</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
