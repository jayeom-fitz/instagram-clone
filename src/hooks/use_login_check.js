import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "contexts/user";

function useLoginCheck(check, link) {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if ((user === null) === check) {
      navigate(`${link}`);
    }
  }, [user, check, link, navigate]);
}

export default useLoginCheck;
