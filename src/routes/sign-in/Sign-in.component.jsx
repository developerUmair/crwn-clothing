import { useEffect } from "react";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
  auth,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up.component";

const SignIn = () => {
  /* useEffect(() => {
    const fetchData = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };
    fetchData();
  }, []); */

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(response.user);
    console.log(userDocRef);
  };

  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>Sign in with google pop up</button>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with google Redirect
      </button> */}
    </>
  );
};

export default SignIn;
