import React, { useState } from "react";
import { BsSearch, BsFillXCircleFill } from "react-icons/bs";

function SearchInput({ setSearchValue }) {
  const [value, setValue] = useState("");

  const onKeyDown = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      setSearchValue(value);
    }
  };

  const onXClick = () => {
    setValue("");
    setSearchValue("");
  };

  return (
    <div className="w-full h-full rounded-md bg-slate-200 flex flex-row items-center px-2 cursor-text">
      <BsSearch className="mx-2" color="gray" />

      <input
        className={`w-full h-full text-sm p-2 border-0 outline-0 bg-slate-200  text-slate-800 `}
        id="header_search_input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="검색"
      />

      <BsFillXCircleFill
        className="cursor-pointer"
        color="gray"
        onClick={onXClick}
      />
    </div>
  );
}

export default SearchInput;
