import { firestore } from "lib/firebase";
import { collection, getDocs, limit, query, where } from "firebase/firestore";

export async function getUsersByUsername(username) {
  const q = query(
    collection(firestore, "users"),
    where("username", ">=", username),
    where("username", "<=", username + "\uf8ff"),
    limit(10)
  );

  const result = await getDocs(q);

  return result;
}
