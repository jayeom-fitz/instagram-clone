import { firestore } from "lib/firebase";
import { doc, setDoc } from "firebase/firestore";

export async function setNames(uid, fullname, username) {
  await setDoc(doc(firestore, "users", uid), {
    fullname: fullname,
    userstate: username,
  });
}
