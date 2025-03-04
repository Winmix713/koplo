import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LoadingSpinner } from '../common/LoadingSpinner';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Failed to log in. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-[#111] flex items-center justify-center p-4">
      <div className="bg-[#1a1a1a] rounded-md p-6 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-sm bg-[#f7a300] flex items-center justify-center mr-2">
              <span className="text-sm font-bold text-black">soccer</span>
            </div>
            <span className="text-white text-xl font-bold">liga</span>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Log in to your account</h1>
        
        {error && (
          <div className="bg-red-900/20 border border-red-800 text-white p-3 rounded-md mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 mb-1">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#222] border border-[#333] text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#04f5ff] focus:border-[#04f5ff]"
              required
            />
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between mb-1">
              <label htmlFor="password" className="text-gray-400">Password</label>
              <Link to="/forgot-password" className="text-[#04f5ff] text-sm hover:underline">
                Forgot password?
              </Link>
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#222] border border-[#333] text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#04f5ff] focus:border-[#04f5ff]"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#04f5ff] text-black font-medium py-2 rounded-md hover:bg-[#03d8e0] transition-colors"
          >
            {loading ? <LoadingSpinner size="small" color="#000" /> : 'Log In'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Don't have an account?{' '}
            <Link to="/register" className="text-[#04f5ff] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};