import { firestore } from "lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function doesUsernameExist(username) {
  const q = query(
    collection(firestore, "users"),
    where("username", "==", username)
  );

  const result = await getDocs(q);

  return result.size;
}
