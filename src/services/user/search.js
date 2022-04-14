import { firestore } from "lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

/*
    username 중복 확인
    => db 검색 후 doc size
*/
export async function doesUsernameExist(username) {
  const q = query(
    collection(firestore, "users"),
    where("username", "==", username)
  );

  const result = await getDocs(q);

  return result.size;
}
