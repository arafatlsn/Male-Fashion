import auth from "./Firebase.init";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

const Handler = () => {
  // load user
  const [userLoad, loadingLoad, errorLoad] = useAuthState(auth);

  // sign in with email pass
  const [
    signInWithEmailAndPassword,
    userSigninEmailPass,
    loadingSigninEmailPass,
    errorSigninEmailPass,
  ] = useSignInWithEmailAndPassword(auth);

  // create use with email pass
  const [
    createUserWithEmailAndPassword,
    userCreating,
    loadingUserCreating,
    errorCreatingUser,
  ] = useCreateUserWithEmailAndPassword(auth);

  // update user profile
  const [updateProfile, updatingUser, errorUpdateUser] = useUpdateProfile(auth);

  return {
    userLoad,
    createUserWithEmailAndPassword,
    userCreating,
    loadingUserCreating,
    errorCreatingUser,
    signInWithEmailAndPassword,
    userSigninEmailPass,
    errorSigninEmailPass,
    updateProfile,
  };
};

export default Handler;
