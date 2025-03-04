import React from 'react';
import { Link } from 'react-router-dom';
import { Team } from '../../types/Team';

interface TeamCardProps {
  team: Team;
}

export const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <Link to={`/teams/${team.id}`} className="block">
      <div className="bg-[#1a1a1a] rounded-md overflow-hidden hover:bg-[#222] transition-colors">
        <div className="relative h-40 bg-gradient-to-r from-[#222] to-[#111]">
          <div className="absolute top-4 left-4">
            <img src={team.logo} alt={team.name} className="h-16 w-16" />
          </div>
          <div className="absolute bottom-4 left-4">
            <h2 className="text-2xl font-bold text-white">{team.name}</h2>
            <p className="text-sm text-gray-400">{team.city}, {team.country}</p>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between mb-2">
            <div className="text-center">
              <span className="block text-xs text-gray-400">Founded</span>
              <span className="block text-white">{team.founded}</span>
            </div>
            <div className="text-center">
              <span className="block text-xs text-gray-400">Stadium</span>
              <span className="block text-white">{team.venue.name}</span>
            </div>
            <div className="text-center">
              <span className="block text-xs text-gray-400">Capacity</span>
              <span className="block text-white">{team.venue.capacity.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-400">Wins</span>
              <span className="text-xs text-white">{team.stats.wins.value}</span>
            </div>
            <div className="h-1 bg-[#333] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#04f5ff]" 
                style={{ width: `${team.stats.wins.percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};