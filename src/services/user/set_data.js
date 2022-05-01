import { firestore } from "lib/firebase";
import { doc, setDoc } from "firebase/firestore";

export async function setNames(uid, fullname, username) {
  await setDoc(doc(firestore, "users", uid), {
    fullname: fullname,
    username: username,
  });
}

export async function setProfile(uid, fullname, username, photoUrl) {
  await setDoc(doc(firestore, "users", uid), {
    fullname: fullname,
    username: username,
    photoUrl: photoUrl,
  });
}
