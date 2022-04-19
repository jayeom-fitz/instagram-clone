import { useState, useEffect } from "react";

import { auth, authState } from "lib/firebase";

function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("ic_auth_user"))
  );

  useEffect(() => {
    const listener = authState(auth, (authUser) => {
      if (authUser) {
        localStorage.setItem("ic_auth_user", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("ic_auth_user");
        setUser(null);
      }
    });

    return () => listener();
  }, []);

  return { user };
}

export default useAuthListener;
