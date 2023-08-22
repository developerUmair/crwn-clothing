import React, { useEffect } from "react";
import {
  // auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
// import { getRedirectResult } from "firebase/auth";

const Authentication = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //       console.log(userDocRef);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const logGoogleUser = async () => {
    // const response = await signInWithGooglePopup();
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(response);
  };

  return (
    <>
      <h1>I am Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with google pop up</button>
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with google Redirect
      </button> */}
    </>
  );
};

export default Authentication;
