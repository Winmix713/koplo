import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube } from 'lucide-react';

interface TeamBayernProps {
  teamName: string;
  location: string;
  logo: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    youtube: string;
  };
  players: {
    name: string;
    number: number;
  }[];
}

export const TeamBayern: React.FC<TeamBayernProps> = ({
  teamName,
  location,
  logo,
  socialLinks,
  players
}) => {
  return (
    <div className="bg-[#1a1a1a] rounded-md overflow-hidden h-full">
      <div className="p-4 border-b border-[#333]">
        <div className="flex items-center">
          <img 
            src={logo || "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80"} 
            alt={teamName} 
            className="h-12 w-12 mr-3"
          />
          <div>
            <h3 className="text-white font-bold">{teamName}</h3>
            <p className="text-gray-400 text-xs">{location}</p>
          </div>
        </div>
        
        <div className="flex mt-4 space-x-2">
          <a 
            href={socialLinks.facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#3b5998] text-white p-1 rounded"
          >
            <Facebook size={16} />
          </a>
          <a 
            href={socialLinks.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#1da1f2] text-white p-1 rounded"
          >
            <Twitter size={16} />
          </a>
          <a 
            href={socialLinks.youtube} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#ff0000] text-white p-1 rounded"
          >
            <Youtube size={16} />
          </a>
        </div>
      </div>
      
      <div className="p-4">
        <h4 className="text-white text-sm font-medium mb-3">Key Players</h4>
        <div className="space-y-2">
          {players.slice(0, 5).map((player, index) => (
            <Link 
              key={index} 
              to={`/players/${index + 1}`} 
              className="flex items-center bg-[#222] p-2 rounded-md hover:bg-[#333] transition-colors"
            >
              <div className="h-6 w-6 rounded-full bg-[#04f5ff] text-black flex items-center justify-center text-xs font-bold mr-2">
                {player.number}
              </div>
              <span className="text-white text-sm">{player.name}</span>
            </Link>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <Link to={`/teams/3`} className="text-[#04f5ff] text-sm hover:underline">
            View Team
          </Link>
        </div>
      </div>
    </div>
  );
};