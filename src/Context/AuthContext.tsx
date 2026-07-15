import React, { createContext, useContext, useState, useEffect } from 'react';
import type {User, UserRole, AuthContextType} from '../Types/auth.ts';
import {MockUsers} from "../Mock/Users.ts"

// 1. Create the Context object with an undefined default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 2. Build the Provider Component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Check if a user is already logged in when the app starts
  useEffect(() => {
    const savedUser = localStorage.getItem('apex_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  // Login function (Simulating an API call)
  const login = async (email: string, password: string): Promise<boolean> => {
    
   try { 
    setIsLoading(true);
    // Simulate a brief network delay (500ms) to make it feel realistic
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    const findUser = MockUsers.find(user => user.email === email);
    
    if(!findUser || password !== findUser.password) return false

    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name: findUser.name,
      email: findUser.email,
      role: findUser.role ,
      department: findUser.role === 'SuperAdmin' ? 'Executive' : 'Engineering',
    };

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
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};