import React, { useState } from "react";

import MainLogo from "components/logo/MainLogo";
import SearchInput from "components/inputs/SearchInput";
import SearchUserBox from "components/boxes/SearchUserBox";

function Header() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="h-16 bg-white border-b border-gray-300">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between items-center align-center h-full">
          <MainLogo />

          <div className="hidden md:block w-full max-w-xs h-9 relative">
            <SearchInput setSearchValue={setSearchValue} />

            <SearchUserBox
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>

          <div>icons</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
