import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { CheckCircle2, Loader2, Mail, Shield, User as UserIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function ProfilePage() {
  const { user, tokenChecked, updateProfile } = useAuth();
  const [formData, setFormData] = useState(null);
  const [status, setStatus] = useState({ type: null, message: '' });
  const [submitting, setSubmitting] = useState(false);

  if (!tokenChecked) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const defaultFormState = {
    fullName: user.fullName || '',
    email: user.email || '',
    password: '',
    confirmPassword: '',
  };

  const currentForm = formData ?? defaultFormState;

  const memberSinceLabel = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString()
    : user.updatedAt
      ? new Date(user.updatedAt).toLocaleDateString()
      : 'Not available';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      const base = prev ?? defaultFormState;
      return { ...base, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: null, message: '' });

    if (!currentForm.fullName.trim() || !currentForm.email.trim()) {
      setStatus({ type: 'error', message: 'Full name and email are required.' });
      return;
    }

    if (currentForm.password && currentForm.password !== currentForm.confirmPassword) {
      setStatus({ type: 'error', message: 'Passwords do not match.' });
      return;
    }

    const payload = {
      fullName: currentForm.fullName.trim(),
      email: currentForm.email.trim(),
    };

    if (currentForm.password) {
      payload.password = currentForm.password;
    }

    setSubmitting(true);
    const { error } = await updateProfile(payload);
    setSubmitting(false);

    if (error) {
      setStatus({ type: 'error', message: typeof error === 'string' ? error : 'Unable to update profile.' });
      return;
    }

    setStatus({ type: 'success', message: 'Profile updated successfully.' });
    setFormData(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="card-glass border border-white/80 p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-wide text-blue-600 font-semibold">Profile</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">Account Overview</h1>
              <p className="text-gray-600 mt-2">
                Keep your contact details up to date to ensure you never miss important information about your courses.
              </p>
            </div>
            <div className="badge-pill bg-emerald-50 text-emerald-700">
              <CheckCircle2 className="h-4 w-4" />
              Active member
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 p-4 bg-white/80">
              <div className="flex items-center gap-3">
                <UserIcon className="h-5 w-5 text-blue-600" />
                <p className="text-sm text-gray-500">Full Name</p>
              </div>
              <p className="mt-2 text-lg font-semibold text-gray-900">{user.fullName}</p>
            </div>

            <div className="border border-gray-100 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <p className="text-sm text-gray-500">Email</p>
              </div>
              <p className="mt-2 text-lg font-semibold text-gray-900">{user.email}</p>
            </div>

            <div className="border border-gray-100 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-blue-600" />
                <p className="text-sm text-gray-500">Role</p>
              </div>
              <p className="mt-2 text-lg font-semibold text-gray-900 capitalize">{user.role || 'user'}</p>
            </div>

            <div className="border border-gray-100 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                <p className="text-sm text-gray-500">Member Since</p>
              </div>
              <p className="mt-2 text-lg font-semibold text-gray-900">{memberSinceLabel}</p>
            </div>
          </div>
        </section>

        <section className="card-glass border border-white/80 p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-gray-900">Update details</h2>
          <p className="text-sm text-gray-600 mt-1">
            Changes are applied immediately and reflected across all your courses.
          </p>

          {status.message && (
            <div className={`alert mt-6 ${status.type === 'success' ? 'alert-success' : 'alert-error'}`}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 grid gap-6">
            <div>
              <label htmlFor="fullName" className="text-sm font-semibold text-slate-700">
                Full name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={currentForm.fullName}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-gray-900 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-50"
                placeholder="Dr. Jane Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={currentForm.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-gray-900 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-50"
                placeholder="you@example.com"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="password" className="text-sm font-semibold text-slate-700">
                  New password (optional)
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={currentForm.password}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-gray-900 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-50"
                  placeholder="••••••••"
                  autoComplete="new-password"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="text-sm font-semibold text-slate-700">
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={currentForm.confirmPassword}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-gray-900 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-50"
                  placeholder="••••••••"
                  autoComplete="new-password"
                />
              </div>
            </div>

            <button type="submit" disabled={submitting} className="btn-brand inline-flex items-center justify-center gap-2 disabled:opacity-60">
              {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save changes
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

