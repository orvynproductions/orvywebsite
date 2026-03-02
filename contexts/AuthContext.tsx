'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

interface User {
  id: string;
  username: string;
  role: 'admin';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo credentials - in production, this would be handled by a backend
const DEMO_CREDENTIALS = {
  username: 'admin',
  password: 'greensprout2025',
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (username: string, password: string): Promise<boolean> => {
    setError(null);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (username === DEMO_CREDENTIALS.username && password === DEMO_CREDENTIALS.password) {
      setUser({
        id: '1',
        username: 'admin',
        role: 'admin',
      });
      return true;
    } else {
      setError('Invalid username or password');
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setError(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: user !== null,
        login,
        logout,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
