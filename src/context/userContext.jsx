import { createContext, useState, useEffect } from 'react';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebaseUtils';

// as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// as the provider which is the actual component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  // When our application initializes, we will mount our user provider
  // Userprovider is going to instantiate the first callback onMount and it will call onState change listener

  // SPACE //

  // onAuthStateChangedListener is being passed in here
  // This function is called once the component mounts and occurs once
  // This listens to changes made on the auth. If user is loggin or loggedout,
  useEffect(() => {
    onAuthStateChangedListener(() => {
      const unsubscribe = onAuthStateChangedListener(user => {
        if (user) {
          createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
      });
      // Give me the unsubscribe and with the useEffect, give me whatever you return from the callback when you unmount
      return unsubscribe;
    });
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
