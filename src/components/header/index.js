import React, { useState } from "react";

import HeaderLogo from "./HeaderLogo";
import SearchInput from "./SearchInput";
import SearchUserBox from "./search_user_box";
import Icons from "./icons";

function Header() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="h-16 bg-white border-b border-gray-300">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between items-center align-center h-full">
          <HeaderLogo />

          <div className="hidden md:block w-full max-w-xs h-9 relative">
            <SearchInput setSearchValue={setSearchValue} />

            <SearchUserBox
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>

          <Icons />
        </div>
      </div>
    </header>
  );
}

export default Header;
