import { firestore } from "lib/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export async function doesUsernameExist(username) {
  const q = query(
    collection(firestore, "users"),
    where("username", "==", username)
  );

  const result = await getDocs(q);

  return result.size;
}

export async function doesUserExist(uid) {
  const docRef = doc(firestore, "users", uid);
  const result = await getDoc(docRef);

  return result.exists();
}
