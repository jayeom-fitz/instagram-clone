import { auth } from "lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

/*
    email, password 로 회원가입
    => auth user 추가 후 uid
*/
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
