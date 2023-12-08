import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  // submitting the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password doesn't match");
      return;
    }
    try {
      //  const response =  await createAuthUserWithEmailAndPassword(email, password);
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      toast.success("User created successfully");
      setFormFields(defaultFormFields);
    } catch (error) {
      console.log(error)
      toast.error(`Error creating user: ${error.message}`);
    }
  };

  return (
    <>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Display Name:
          <input
            type="text"
            name="displayName"
            onChange={handleChange}
            value={displayName}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <ToastContainer />
    </>
  );
};

export default SignUpForm;
