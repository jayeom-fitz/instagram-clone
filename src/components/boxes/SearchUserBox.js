import MiniProfileLink from "components/user/MiniProfileLink";
import React, { useEffect, useState } from "react";
import { getUsersByUsername } from "services/user";

function SearchUserBox({ searchValue, setSearchValue }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    function getUsersDataBySearchValue() {
      if (searchValue !== "") {
        getUsersByUsername(searchValue).then((result) => {
          let data = [];

          result.forEach((doc) =>
            data.push({
              id: doc.id,
              fullname: doc.data().fullname,
              username: doc.data().username,
              photoUrl: doc.data().photoUrl,
            })
          );

          setUsers(data);
        });
      }
    }

    getUsersDataBySearchValue();
  }, [searchValue]);

  return (
    <div
      className={`${
        searchValue ? "h-96 border" : "hidden h-0 border-0"
      } absolute top-12 w-full bg-slate-100 border-slate-400 overflow-y-scroll`}
    >
      {users.length !== 0 ? (
        users.map((user) => (
          <MiniProfileLink
            key={`mini_profile_link_${user.username}`}
            user={user}
            setSearchValue={setSearchValue}
          />
        ))
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-sm text-slate-400">검색 결과가 없습니다.</span>
        </div>
      )}
    </div>
  );
}

export default SearchUserBox;
