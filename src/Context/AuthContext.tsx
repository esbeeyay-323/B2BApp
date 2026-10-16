import React, { createContext, useContext, useState } from 'react';
import type {User, AuthContextType} from '../Types/auth.ts';
import {MockUsers} from "../Mock/Users.ts"

// 1. Create the Context object with an undefined default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const createSessionUser = (user: User): User => ({
  id: user.id,
  name: user.name,
  email: user.email,
  role: user.role,
  department: user.department,
});

// 2. Build the Provider Component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('apex_user');
    if (!savedUser) return null;

    try {
      const storedUser = JSON.parse(savedUser) as User;
      const currentUser = MockUsers.find(({ id, email }) =>
        id === storedUser.id || email === storedUser.email
      );

      if (currentUser) return createSessionUser(currentUser);
    } catch {
      // Invalid or outdated session data is cleared below.
    }

    localStorage.removeItem('apex_user');
    return null;
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Login function (Simulating an API call)
  const login = async (email: string, password: string): Promise<boolean> => {
    
   try { 
    setIsLoading(true);
    // Simulate a brief network delay (500ms) to make it feel realistic
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    const findUser = MockUsers.find(user => user.email === email);
    
    if(!findUser || password !== findUser.password) return false

    const mockUser = createSessionUser(findUser);

    setUser(mockUser);
    console.log(findUser)
    localStorage.setItem('apex_user', JSON.stringify(mockUser));
    return true;
  } catch (error) {
    console.error(error)
    return false
  } finally {
    setIsLoading(false)
  }
  };
  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('apex_user');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Create a custom hook for clean, easy imports in other components
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
