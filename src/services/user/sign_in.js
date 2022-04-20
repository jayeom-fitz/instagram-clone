import { auth, googleProvider } from "lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doesUserExist } from "./search";
import { setNames } from "./set_data";

export async function signUpWithEmailAndPassword(email, password) {
  const result = createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return { uid: userCredential.user.uid };
    })
    .catch((error) => {
      return { error: error.code };
    });
  return result;
}

export async function loginWithEmailAndPassword(email, password) {
  const result = signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      return { uid: userCredential.user.uid };
    })
    .catch((error) => {
      return { error: error.code };
    });
  return result;
}

export async function loginWithGoogleProvider() {
  signInWithPopup(auth, googleProvider).then(async (result) => {
    const check = await doesUserExist(result.user.uid);
    if (!check) {
      await setNames(
        result.user.uid,
        result.user.displayName,
        result.user.uid.slice(5)
      );
    }
  });
}

export async function logout() {
  signOut(auth);
}
