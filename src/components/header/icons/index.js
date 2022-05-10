import React from "react";
import { Link } from "react-router-dom";

import { MdHomeFilled } from "react-icons/md";
import { IoPaperPlaneSharp } from "react-icons/io5";

import { ImCompass2 } from "react-icons/im";

import AddIcon from "./add";
import HeartIcon from "./heart";
import HeaderAvatar from "./avatar";

const size = 24;

function Icons() {
  return (
    <div className="flex justify-between">
      <Link className="px-2" to="/">
        <MdHomeFilled size={size} />
      </Link>

      <Link className="px-2" to="/direct">
        <IoPaperPlaneSharp size={size} />
      </Link>

      <AddIcon />

      <Link className="px-2" to="/explore">
        <ImCompass2 size={size} />
      </Link>

      <HeartIcon />

      <HeaderAvatar />
    </div>
  );
}

export default Icons;
