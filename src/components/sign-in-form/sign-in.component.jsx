import { useContext, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  // submitting the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      // setCurrentUser(user)
      toast.success("User Signed In successfully");
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-login-credentials":
          toast.error("Incorrect password for email");
          break;
        case "auth/user-not-found":
          toast.error("No user attached with this email");
          break;
        default:
          toast.error(error.message);
      }
      // if(error.code === 'auth/invalid-login-credentials'){
      //   toast.error('Incorrect password for email')
      // } else {
      //   toast.error(error.message);
      // }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopUp();

  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        {/* <FormInput
          label="Display Name:"
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
        /> */}

        <FormInput
          label="Email:"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password:"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
        {/* <FormInput
          label="Confirm Password:"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        /> */}
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}>
            Google Sign In
          </Button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignInForm;
