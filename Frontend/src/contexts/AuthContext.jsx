import React, { createContext, useContext, useEffect, useState } from 'react';
import API, { setAuthToken } from '../api';
import Loader from '../components/Loader';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [tokenChecked, setTokenChecked] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(false);

  // load token from localStorage and fetch profile
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
      loadProfile();
    } else {
      setTokenChecked(true);
    }
  }, []);

  async function loadProfile() {
    try {
      const { data } = await API.get('/api/auth/me'); // backend: returns user profile
      setUser(data.user);
    } catch {
      setUser(null);
      setAuthToken(null);
    } finally {
      setTokenChecked(true);
    }
  }

  async function signIn(email, password) {
    setGlobalLoading(true);
    try {
      const { data } = await API.post('/api/auth/login', { email, password });
      if (data.token) {
        setAuthToken(data.token);
        await loadProfile();
        return { error: null };
      }
      return { error: new Error('Invalid response from server') };
    } catch (err) {
      const msg = err.response?.data?.message || err.response?.data?.error || 'Login failed';
      return { error: msg };
    } finally {
      setGlobalLoading(false);
    }
  }

  async function signUp(email, password, fullName) {
    try {
      const { data } = await API.post('/api/auth/register', { email, password, fullName });
      if (data.token) {
        setAuthToken(data.token);
        await loadProfile();
        return { error: null };
      }
      return { error: new Error('Invalid response from server') };
    } catch (err) {
      return { error: err.response?.data?.error || err };
    }
  }

  async function updateProfile(updates) {
    try {
      const { data } = await API.put('/api/auth/profile', updates);
      setUser(data.user);
      return { error: null, user: data.user };
    } catch (err) {
      const message = err.response?.data?.message || 'Failed to update profile';
      return { error: message };
    }
  }

  async function signOut() {
    setGlobalLoading(true);
    // Simulate a small delay for better UX (optional, but requested "time also")
    await new Promise(resolve => setTimeout(resolve, 800));
    setUser(null);
    setAuthToken(null);
    setGlobalLoading(false);
  }

  return (
    <AuthContext.Provider value={{ user, tokenChecked, signIn, signUp, signOut, updateProfile }}>
      {globalLoading && <Loader fullScreen text="Processing..." />}
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
