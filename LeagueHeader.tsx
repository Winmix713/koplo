import React from 'react';
import { Link } from 'react-router-dom';

interface LeagueHeaderProps {
  league: {
    id: string;
    name: string;
    country: string;
    logo: string;
  };
  activeTab: string;
}

export const LeagueHeader: React.FC<LeagueHeaderProps> = ({ league, activeTab }) => {
  const tabs = [
    { id: 'overview', label: 'Overview', path: `/leagues/${league.id}` },
    { id: 'standings', label: 'Standings', path: `/leagues/${league.id}/standings` },
    { id: 'matches', label: 'Matches', path: `/leagues/${league.id}/matches` },
    { id: 'teams', label: 'Teams', path: `/leagues/${league.id}/teams` },
    { id: 'stats', label: 'Stats', path: `/leagues/${league.id}/stats` },
  ];

  return (
    <div className="bg-[#1a1a1a] border-b border-[#222]">
      <div className="container mx-auto px-4">
        <div className="flex items-center py-4">
          <img 
            src={league.logo} 
            alt={league.name} 
            className="h-12 w-12 mr-4"
          />
          <div>
            <h1 className="text-xl font-bold text-white">{league.name}</h1>
            <p className="text-sm text-gray-400">{league.country}</p>
          </div>
        </div>
        
        <div className="flex space-x-6 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              to={tab.path}
              className={`text-sm font-medium pb-2 ${
                activeTab === tab.id
                  ? 'text-[#04f5ff] border-b-2 border-[#04f5ff]'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};