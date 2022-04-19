import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useLoginCheck(user, check, link) {
  const navigate = useNavigate();

  useEffect(() => {
    if ((user === null) === check) {
      navigate(`${link}`);
    }
  }, [user, check, link, navigate]);
}

export default useLoginCheck;
