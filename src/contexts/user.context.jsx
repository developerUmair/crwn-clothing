import { createContext, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  signOutUser,
} from "../utils/firebase/firebase.utils";
import { setCurrentUser } from "../store/user/user.action";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

export const userReducer = (state, action) => {
  console.log('I am action', action)
  const { type, payload } = action;
  
  switch(type){
    case USER_ACTION_TYPES.SET_CURRENT_USER:
    return {
      ...state,
      currentUser: payload
    }
    default:
      throw new Error(`Unhandled type ${type} in userReducer`)
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const { currentUser } = state;
  console.log(currentUser);

  
  const value = { currentUser, setCurrentUser };

  // signOutUser();

  
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
