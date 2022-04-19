import { auth } from "lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

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

export async function logout() {
  signOut(auth);
}
