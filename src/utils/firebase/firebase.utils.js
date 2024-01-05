import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAePv1j5d0ls3mD8BNIkDcUZiK8q_VSMA",
  authDomain: "crown-clothing-db-32611.firebaseapp.com",
  projectId: "crown-clothing-db-32611",
  storageBucket: "crown-clothing-db-32611.appspot.com",
  messagingSenderId: "245399548741",
  appId: "1:245399548741:web:67cb8c26dc40a51f5c042c",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInformation = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  // console.log(userSnapShot);
  // console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      alert("error creating the user", error.message);
    }
  } else {
    return userDocRef;
  }
};

// Create user with email and password

export const createAuthUserWithEmailAndPassword = async(email, password) => {
  if (!(email || password)) return;

  return await createUserWithEmailAndPassword(auth, email, password)
};

export const signInAuthUserWithEmailAndPassword = async(email, password) => {
  if (!(email || password)) return;

  return await signInWithEmailAndPassword(auth, email, password)
};

// sign out user

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    toast.error(`Error signing out: ${error.message}`);
  }
};

// on auth state change
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)