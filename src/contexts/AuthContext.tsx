import { createContext, useContext, useState, useEffect } from 'react';
import type { User, AuthResponse, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth token
    const token = localStorage.getItem('auth_token');
    if (token) {
      // TODO: Validate token with backend
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // TODO: Replace with actual API call
      const response: AuthResponse = await mockLogin(email, password);
      setUser(response.user);
      localStorage.setItem('auth_token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      login,
      logout,
      isAuthenticated: !!user,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Update the mockLogin function to simulate different roles
const mockLogin = async (email: string, password: string): Promise<AuthResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Determine role based on email prefix for testing
  const roleMap = {
    'customer@': 'customer',
    'employee@': 'employee',
    'owner@': 'owner',
    'admin@': 'admin',
  };

  const role = Object.entries(roleMap).find(([prefix]) => email.startsWith(prefix))?.[1] || 'customer';
  
  return {
    user: {
      id: '1',
      email,
      name: `Test ${role.charAt(0).toUpperCase() + role.slice(1)}`,
      role: role as UserRole,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
    },
    token: 'mock_jwt_token'
  };
}; 