import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-gray-400 border-t border-[#222]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-sm bg-[#f7a300] flex items-center justify-center mr-2">
                <span className="text-xs font-bold text-black">soccer</span>
              </div>
              <span className="text-white font-bold">liga</span>
            </div>
            <p className="text-sm mb-4">
              Your ultimate destination for football news, scores, and statistics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#04f5ff]">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#04f5ff]">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#04f5ff]">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#04f5ff]">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/matches" className="hover:text-white">Matches</Link></li>
              <li><Link to="/standings" className="hover:text-white">Standings</Link></li>
              <li><Link to="/news" className="hover:text-white">News</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Top Leagues</h3>
            <ul className="space-y-2">
              <li><Link to="/leagues/1" className="hover:text-white">Premier League</Link></li>
              <li><Link to="/leagues/2" className="hover:text-white">La Liga</Link></li>
              <li><Link to="/leagues/3" className="hover:text-white">Bundesliga</Link></li>
              <li><Link to="/leagues/4" className="hover:text-white">Serie A</Link></li>
              <li><Link to="/leagues/5" className="hover:text-white">Ligue 1</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#222] mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Soccer Liga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};