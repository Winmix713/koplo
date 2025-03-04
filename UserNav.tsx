import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Settings, LogOut, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const UserNav: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="flex items-center space-x-4">
        <Link to="/login" className="text-sm text-white bg-[#04f5ff] hover:bg-[#03d8e0] px-4 py-2 rounded-md">
          Login
        </Link>
        <Link to="/register" className="text-sm text-white bg-[#222] hover:bg-[#333] px-4 py-2 rounded-md">
          Register
        </Link>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="flex items-center space-x-4">
        <button className="text-gray-400 hover:text-white relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-[#f7a300] text-black text-xs rounded-full flex items-center justify-center">
            3
          </span>
        </button>
        
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-[#222] flex items-center justify-center">
            <User size={16} className="text-white" />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-white">{user.name}</p>
            <p className="text-xs text-gray-400">{user.email}</p>
          </div>
        </div>
        
        <div className="relative group">
          <button className="text-gray-400 hover:text-white">
            <Settings size={20} />
          </button>
          
          <div className="absolute right-0 mt-2 w-48 bg-[#222] border border-[#333] rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
            <Link to="/profile" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#333] hover:text-white">
              Profile
            </Link>
            <Link to="/settings" className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#333] hover:text-white">
              Settings
            </Link>
            <button 
              onClick={logout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#333] hover:text-white"
            >
              <div className="flex items-center">
                <LogOut size={16} className="mr-2" />
                <span>Logout</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};