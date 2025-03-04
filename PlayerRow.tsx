import React from 'react';
import { Link } from 'react-router-dom';
import { Player } from '../../types/Player';

interface PlayerRowProps {
  player: Player;
  showTeam?: boolean;
}

export const PlayerRow: React.FC<PlayerRowProps> = ({ player, showTeam = false }) => {
  return (
    <Link to={`/players/${player.id}`} className="block">
      <div className="bg-[#1a1a1a] hover:bg-[#222] p-3 rounded-md flex items-center mb-2 transition-colors">
        <div className="flex items-center flex-1">
          <div className="relative">
            <img 
              src={player.image} 
              alt={player.name} 
              className="h-12 w-12 rounded-full object-cover mr-3"
            />
            <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-[#222] rounded-full flex items-center justify-center text-xs text-white font-bold border border-[#333]">
              {player.number}
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium">{player.name}</h3>
            <div className="flex items-center text-xs">
              <span className="text-gray-400 mr-2">{player.position}</span>
              <span className="text-gray-400">{player.nationality}</span>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-4 text-center">
          <div>
            <span className="block text-xs text-gray-400">Goals</span>
            <span className="block text-white font-medium">{player.stats.goals}</span>
          </div>
          <div>
            <span className="block text-xs text-gray-400">Assists</span>
            <span className="block text-white font-medium">{player.stats.assists}</span>
          </div>
          <div>
            <span className="block text-xs text-gray-400">Apps</span>
            <span className="block text-white font-medium">{player.stats.appearances}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};