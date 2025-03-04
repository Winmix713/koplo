import React, { useState, useEffect } from 'react';
import { fetchLeagues } from '../../utils/api';
import { League, LeagueStanding } from '../../types/League';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { ErrorMessage } from '../common/ErrorMessage';

export const TeamStandingsPage: React.FC = () => {
  const [leagues, setLeagues] = useState<League[]>([]);
  const [activeLeague, setActiveLeague] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const loadLeagues = async () => {
      try {
        const data = await fetchLeagues();
        setLeagues(data);
        if (data.length > 0) {
          setActiveLeague(data[0].id);
        }
      } catch (err) {
        setError('Failed to load league data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    loadLeagues();
  }, []);
  
  const currentLeague = leagues.find(league => league.id === activeLeague);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-64px)]">
        <LoadingSpinner size="large" />
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container mx-auto px-4 py-6">
        <ErrorMessage message={error} />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-white mb-6">League Standings</h1>
      
      <div className="flex overflow-x-auto pb-2 mb-6">
        {leagues.map(league => (
          <button
            key={league.id}
            className={`flex items-center px-4 py-2 mr-2 rounded-md whitespace-nowrap ${
              activeLeague === league.id 
                ? 'bg-[#04f5ff] text-black' 
                : 'bg-[#1a1a1a] text-white hover:bg-[#222]'
            }`}
            onClick={() => setActiveLeague(league.id)}
          >
            <img 
              src={league.logo} 
              alt={league.name} 
              className="h-6 w-6 mr-2"
            />
            <span>{league.name}</span>
          </button>
        ))}
      </div>
      
      {currentLeague ? (
        <div className="bg-[#1a1a1a] rounded-md overflow-hidden">
          <div className="p-4 border-b border-[#333] flex items-center">
            <img 
              src={currentLeague.logo} 
              alt={currentLeague.name} 
              className="h-10 w-10 mr-3"
            />
            <div>
              <h2 className="text-xl font-bold text-white">{currentLeague.name}</h2>
              <p className="text-sm text-gray-400">{currentLeague.country} • Season {currentLeague.season}/{currentLeague.season + 1}</p>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#222] text-gray-400 text-xs">
                  <th className="py-3 px-4 text-left font-normal">#</th>
                  <th className="py-3 px-4 text-left font-normal">Team</th>
                  <th className="py-3 px-4 text-center font-normal">MP</th>
                  <th className="py-3 px-4 text-center font-normal">W</th>
                  <th className="py-3 px-4 text-center font-normal">D</th>
                  <th className="py-3 px-4 text-center font-normal">L</th>
                  <th className="py-3 px-4 text-center font-normal">GF</th>
                  <th className="py-3 px-4 text-center font-normal">GA</th>
                  <th className="py-3 px-4 text-center font-normal">GD</th>
                  <th className="py-3 px-4 text-center font-normal">PTS</th>
                  <th className="py-3 px-4 text-center font-normal">Last 5</th>
                </tr>
              </thead>
              <tbody>
                {currentLeague.standings.map((team, index) => (
                  <tr 
                    key={team.team.id} 
                    className={`border-b border-[#333] last:border-0 ${
                      index < 4 ? 'text-white' : 'text-gray-400'
                    } hover:bg-[#222]`}
                  >
                    <td className="py-3 px-4">
                      <div className={`flex items-center justify-center h-6 w-6 rounded-full text-xs ${
                        index === 0 ? 'bg-[#04f5ff] text-black' : 
                        index < 4 ? 'bg-[#222] text-white' : 'text-gray-400'
                      }`}>
                        {team.position}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <img 
                          src={team.team.logo} 
                          alt={team.team.name} 
                          className="h-6 w-6 mr-2"
                        />
                        <span>{team.team.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">{team.played}</td>
                    <td className="py-3 px-4 text-center">{team.won}</td>
                    <td className="py-3 px-4 text-center">{team.drawn}</td>
                    <td className="py-3 px-4 text-center">{team.lost}</td>
                    <td className="py-3 px-4 text-center">{team.goalsFor}</td>
                    <td className="py-3 px-4 text-center">{team.goalsAgainst}</td>
                    <td className="py-3 px-4 text-center">{team.goalDifference}</td>
                    <td className="py-3 px-4 text-center font-bold">{team.points}</td>
                    <td className="py-3 px-4">
                      <div className="flex justify-center space-x-1">
                        {team.form.split('').map((result, i) => (
                          <div 
                            key={i}
                            className={`h-4 w-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                              result === 'W' ? 'bg-green-500 text-white' :
                              result === 'D' ? 'bg-gray-500 text-white' :
                              'bg-red-500 text-white'
                            }`}
                          >
                            {result}
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-[#333] flex items-center text-xs text-gray-400">
            <div className="flex items-center mr-4">
              <div className="h-3 w-3 rounded-full bg-[#04f5ff] mr-1"></div>
              <span>Champions League</span>
            </div>
            <div className="flex items-center mr-4">
              <div className="h-3 w-3 rounded-full bg-[#222] mr-1"></div>
              <span>Europa League</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-red-500 mr-1"></div>
              <span>Relegation</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#1a1a1a] p-6 rounded-md text-center text-gray-400">
          No league selected
        </div>
      )}
    </div>
  );
};