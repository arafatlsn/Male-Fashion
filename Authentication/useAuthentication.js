import auth from "./Firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

const Handler = () => {
  // sign in google
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);

  // sign in with email pass
  const [
    signInWithEmailAndPassword,
    userSigninEmailPass,
    loadingSigninEmailPass,
    errorSigninEmailPass,
  ] = useSignInWithEmailAndPassword(auth);

  // create use with email pass
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // update user profile
  const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);
  return {
    signInWithGoogle,
    createUserWithEmailAndPassword,
    error,
    signInWithEmailAndPassword,
    errorSigninEmailPass,
    updateProfile,
  };
};

export default Handler;
