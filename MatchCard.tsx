import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '../ui/Tabs';
import { Badge } from '../ui/Badge';
import { formatMatchDate, formatMatchTime } from '../../utils/dateUtils';
import { Match } from '../../types/Match';

interface MatchCardProps {
  match: Match;
}

export const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const [activeTab, setActiveTab] = useState('lineup');

  const tabs = [
    { id: 'lineup', label: 'Lineups' },
    { id: 'broadcast', label: 'Broadcast' },
  ];

  const isLive = match.status === 'live';

  return (
    <div className="rounded-md bg-[#1a1a1a] p-4 h-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-white text-2xl font-bold">{match.time}</h3>
          <p className="text-gray-400 text-xs">
            {formatMatchDate(match.date)}
          </p>
        </div>
        {isLive && <Badge className="bg-[#f7a300] text-black">LIVE</Badge>}
      </div>

      <Link to={`/match/${match.id}`} className="block">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col items-center">
            <img
              src={match.homeTeam.logo}
              alt={match.homeTeam.name}
              width={60}
              height={60}
              className="mb-2"
            />
            <span className="text-white font-medium text-sm">{match.homeTeam.name}</span>
          </div>

          <div className="text-center">
            {isLive || match.status === 'finished' ? (
              <div className="text-white font-bold text-xl">
                {match.homeTeam.score} - {match.awayTeam.score}
              </div>
            ) : (
              <div className="text-white font-bold text-xl">VS</div>
            )}
          </div>

          <div className="flex flex-col items-center">
            <img
              src={match.awayTeam.logo}
              alt={match.awayTeam.name}
              width={60}
              height={60}
              className="mb-2"
            />
            <span className="text-white font-medium text-sm">{match.awayTeam.name}</span>
          </div>
        </div>
      </Link>

      <div className="text-center text-gray-400 text-sm mb-4">{match.venue}</div>

      <Tabs defaultValue={tabs[0].id} className="w-full">
        <TabsList className="w-full bg-[#222]">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="flex-1 text-gray-400 data-[state=active]:bg-[#04f5ff] data-[state=active]:text-black"
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};