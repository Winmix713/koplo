import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, Bell, User } from 'lucide-react';
import { SearchBar } from '../common/SearchBar';
import { useAuth } from '../../context/AuthContext';

export const Header: React.FC = () => {
  const { user } = useAuth();

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // Implement search functionality
  };

  return (
    <header className="bg-[#111] text-white border-b border-[#222]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Mobile Menu */}
          <div className="flex items-center">
            <button className="md:hidden mr-4 text-gray-400 hover:text-white">
              <Menu size={24} />
            </button>
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 rounded-sm bg-[#f7a300] flex items-center justify-center mr-2">
                <span className="text-xs font-bold text-black">soccer</span>
              </div>
              <span className="text-white font-bold">liga</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
            <Link to="/matches" className="text-gray-300 hover:text-white">Matches</Link>
            <Link to="/standings" className="text-gray-300 hover:text-white">Standings</Link>
            <Link to="/news" className="text-gray-300 hover:text-white">News</Link>
          </nav>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block w-64">
              <SearchBar onSearch={handleSearch} placeholder="Search teams, players..." />
            </div>
            <button className="text-gray-400 hover:text-white">
              <Bell size={20} />
            </button>
            {user ? (
              <Link to="/profile" className="flex items-center text-gray-300 hover:text-white">
                <div className="h-8 w-8 rounded-full bg-[#222] flex items-center justify-center mr-2">
                  <User size={16} />
                </div>
                <span className="hidden md:inline">{user.name}</span>
              </Link>
            ) : (
              <Link to="/login" className="text-gray-300 hover:text-white">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};