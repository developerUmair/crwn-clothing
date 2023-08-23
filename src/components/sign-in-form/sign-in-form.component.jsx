import React, { useState } from "react";
// import {
//   createAuthUserWithEmailAndPassword,
//   createUserDocumentFromAuth,
// } from "../utils/firebase/firebase.utils";
import "./sign-in-form-style.scss";
import Button from "../button/button.component";
import FormInput from "../../form-input/form-input.component";
import {
  createUserDocumentFromAuth,
  signAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    // const response = await signInWithGooglePopup();
    await signInWithGooglePopup();

    // const userDocRef = await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await signAuthUserWithEmailAndPassword(email, password);
      const { user } = await signAuthUserWithEmailAndPassword(email, password);
      // console.log(response);
      alert("Signed In successfully");
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong password");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.error("Error signing in:", error);
          alert("An error occurred while signing in");
          break;
      }
    }
  };

  // console.log(formFields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
