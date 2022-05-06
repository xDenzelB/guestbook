import { createContext, useContext, useState } from 'react';
import { getUser, signInUser } from '../services/user';

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

  function logout() {
    setUser({ email: null });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
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
}