import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LoadingSpinner } from '../common/LoadingSpinner';

export const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { register, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    try {
      await register(email, password, name);
      navigate('/');
    } catch (err) {
      setError('Failed to create an account. Please try again.');
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
        
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Create your account</h1>
        
        {error && (
          <div className="bg-red-900/20 border border-red-800 text-white p-3 rounded-md mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-400 mb-1">Full Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#222] border border-[#333] text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#04f5ff] focus:border-[#04f5ff]"
              required
            />
          </div>
          
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
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-400 mb-1">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#222] border border-[#333] text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#04f5ff] focus:border-[#04f5ff]"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-400 mb-1">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-[#222] border border-[#333] text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#04f5ff] focus:border-[#04f5ff]"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#04f5ff] text-black font-medium py-2 rounded-md hover:bg-[#03d8e0] transition-colors"
          >
            {loading ? <LoadingSpinner size="small" color="#000" /> : 'Sign Up'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-[#04f5ff] hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};