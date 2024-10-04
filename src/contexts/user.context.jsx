import { createContext, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  signOutUser,
} from "../utils/firebase/firebase.utils";

// as the actual value you wanna access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});


export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

export const userReducer = (state, action) => {
  console.log(action)
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };

    default:
      throw new Error(`Unhandled action type: ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)

  const { currentUser } = state
  console.log(currentUser)

  const setCurrentUser = user => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user })
  }

  const value = { currentUser, setCurrentUser };

  // signOutUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      unsubscribe(); // Unsubscribe when the component unmounts
    };
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
