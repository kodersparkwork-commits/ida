import React, { useState } from 'react';
import API, { setAdminToken } from '../../api';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/api/admin/login', { email, password });
      if (data.token) {
        // store admin token separately
        setAdminToken(data.token);
        navigate('/admin');
      } else {
        setErr('Invalid credentials');
      }
    } catch (error) {
      setErr(error.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-md w-full bg-white rounded shadow p-8">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        {err && <div className="text-red-600 mb-2">{err}</div>}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input className="w-full px-3 py-2 border rounded" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
          <input className="w-full px-3 py-2 border rounded" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
          <button className="w-full py-2 bg-blue-600 text-white rounded">Login</button>
        </form>
      </div>
    </div>
  );
}
