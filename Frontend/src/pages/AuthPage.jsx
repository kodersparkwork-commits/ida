import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useNotification } from '../components/Notification';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const notify = useNotification();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      const { error } = await signUp(email, password, fullName);
      if (error) {
        notify.error(String(error));
      } else {
        notify.success('Account created successfully!');
        navigate('/courses');
      }
    } else {
      const { error } = await signIn(email, password);
      if (error) {
        notify.error(String(error));
      } else {
        notify.success('Welcome back!');
        navigate('/courses');
      }
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-4">{isSignUp ? 'Create Account' : 'Sign In'}</h2>

          {error && <div className="mb-4 text-red-600">{String(error)}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full name" className="w-full px-4 py-2 border rounded" required />
            )}
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" className="w-full px-4 py-2 border rounded" required />
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" className="w-full px-4 py-2 border rounded" required />
            <button className="w-full py-2 bg-blue-600 text-white rounded">{isSignUp ? 'Create' : 'Sign In'}</button>
          </form>

          <div className="mt-4 text-sm text-center">
            <button onClick={() => setIsSignUp(!isSignUp)} className="text-blue-600">
              {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
