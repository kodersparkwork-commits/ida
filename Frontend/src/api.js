import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// set user token
export function setAuthToken(token) {
  if (token) {
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
  } else {
    delete API.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
}

// set admin token
export function setAdminToken(token) {
  if (token) {
    API.defaults.headers.common['x-admin-token'] = token;
    localStorage.setItem('adminToken', token);
  } else {
    delete API.defaults.headers.common['x-admin-token'];
    localStorage.removeItem('adminToken');
  }
}

export default API;
