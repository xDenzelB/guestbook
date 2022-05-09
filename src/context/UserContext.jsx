import { createContext, useContext, useState } from 'react';
import { getUser, signInUser, signUpUser } from '../services/user';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser || { email: null });

  async function login(email, password) {
    const authenticatedUser = await signInUser({ email, password });

    if (authenticatedUser) {
      setUser(authenticatedUser);
    }
  };

  async function signUp(email, password) {
    const newUser = await signUpUser({ email, password });
    if (newUser) {
      setUser(newUser);
    }
  }

  function logout() {
    setUser({ email: null });
  };

  return (
    <UserContext.Provider value={{ user, setUser, signUp, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser needs to be used with UserProvider');
  }
  return context;
};
