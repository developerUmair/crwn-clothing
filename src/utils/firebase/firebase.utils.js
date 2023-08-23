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

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZdWS_E0K8aU2MixiU502aYQGpoS0wluY",
  authDomain: "crwn-clothing-db-bf950.firebaseapp.com",
  projectId: "crwn-clothing-db-bf950",
  storageBucket: "crwn-clothing-db-bf950.appspot.com",
  messagingSenderId: "570410523091",
  appId: "1:570410523091:web:7c66fdbba724ce9fb5f726",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(`error creating the user ${error.message}`);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!(email || password)) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signAuthUserWithEmailAndPassword = async (email, password) => {
  if (!(email || password)) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)
