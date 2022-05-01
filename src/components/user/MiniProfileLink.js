import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

function MiniProfileLink({ user, setSearchValue }) {
  return (
    <Link to={`/${user.username}`} onClick={() => setSearchValue("")}>
      <div className="flex flex-row hover:bg-slate-200">
        <div className="flex items-center px-4">
          <Avatar className="rounded-full" size="40" src={user.photoUrl} />
        </div>

        <div className="flex flex-col py-2">
          <div className="text-sm">{user.fullname}</div>
          <div className="text-slate-400 text-sm">{user.username}</div>
        </div>
      </div>
    </Link>
  );
}

export default MiniProfileLink;
