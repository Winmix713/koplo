import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPlayerById, fetchTeamById } from '../../utils/api';
import { Player } from '../../types/Player';
import { Team } from '../../types/Team';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { ErrorMessage } from '../common/ErrorMessage';

export const PlayerProfilePage: React.FC = () => {
  const { playerId } = useParams<{ playerId: string }>();
  const [player, setPlayer] = useState<Player | null>(null);
  const [team, setTeam] = useState<Team | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const loadPlayerData = async () => {
      if (!playerId) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const playerData = await fetchPlayerById(playerId);
        
        if (!playerData) {
          setError('Player not found');
          return;
        }
        
        setPlayer(playerData);
        
        // Load team data
        if (playerData.teamId) {
          const teamData = await fetchTeamById(playerData.teamId);
          setTeam(teamData || null);
        }
      } catch (err) {
        setError('Failed to load player data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    loadPlayerData();
  }, [playerId]);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-64px)]">
        <LoadingSpinner size="large" />
      </div>
    );
  }
  
  if (error || !player) {
    return (
      <div className="container mx-auto px-4 py-6">
        <ErrorMessage message={error || 'Player not found'} />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-[#1a1a1a] rounded-md overflow-hidden">
        {/* Player Header */}
        <div className="relative h-48 bg-gradient-to-r from-[#222] to-[#111]">
          {team && (
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `url(${team.venue.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}></div>
          )}
          
          <div className="absolute bottom-0 left-0 w-full p-6 flex items-end">
            <div className="relative">
              <img 
                src={player.image} 
                alt={player.name} 
                className="h-24 w-24 rounded-full border-4 border-[#1a1a1a] object-cover"
              />
              <div className="absolute -bottom-2 -right-2 h-8 w-8 bg-[#04f5ff] text-black rounded-full flex items-center justify-center font-bold">
                {player.number}
              </div>
            </div>
            
            <div className="ml-4">
              <h1 className="text-3xl font-bold text-white">{player.name}</h1>
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">{player.position}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-400 ml-2">{player.nationality}</span>
                {team && (
                  <>
                    <span className="text-gray-400 mx-2">•</span>
                    <div className="flex items-center">
                      <img 
                        src={team.logo} 
                        alt={team.name} 
                        className="h-4 w-4 mr-1"
                      />
                      <span className="text-gray-400">{team.name}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Player Stats */}
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-[#222] rounded-md p-4 text-center">
              <span className="block text-gray-400 text-sm mb-1">Appearances</span>
              <span className="block text-white text-2xl font-bold">{player.stats.appearances}</span>
            </div>
            <div className="bg-[#222] rounded-md p-4 text-center">
              <span className="block text-gray-400 text-sm mb-1">Goals</span>
              <span className="block text-white text-2xl font-bold">{player.stats.goals}</span>
            </div>
            <div className="bg-[#222] rounded-md p-4 text-center">
              <span className="block text-gray-400 text-sm mb-1">Assists</span>
              <span className="block text-white text-2xl font-bold">{player.stats.assists}</span>
            </div>
            <div className="bg-[#222] rounded-md p-4 text-center">
              <span className="block text-gray-400 text-sm mb-1">Minutes Played</span>
              <span className="block text-white text-2xl font-bold">{player.stats.minutesPlayed}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Player Information</h2>
              <div className="bg-[#222] rounded-md p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-gray-400 text-sm mb-1">Full Name</span>
                    <span className="block text-white">{player.firstName} {player.lastName}</span>
                  </div>
                  <div>
                    <span className="block text-gray-400 text-sm mb-1">Age</span>
                    <span className="block text-white">{player.age} years</span>
                  </div>
                  <div>
                    <span className="block text-gray-400 text-sm mb-1">Position</span>
                    <span className="block text-white">{player.position}</span>
                  </div>
                  <div>
                    <span className="block text-gray-400 text-sm mb-1">Nationality</span>
                    <span className="block text-white">{player.nationality}</span>
                  </div>
                  <div>
                    <span className="block text-gray-400 text-sm mb-1">Jersey Number</span>
                    <span className="block text-white">#{player.number}</span>
                  </div>
                  <div>
                    <span className="block text-gray-400 text-sm mb-1">Team</span>
                    <span className="block text-white">{team?.name || 'N/A'}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Season Statistics</h2>
              <div className="bg-[#222] rounded-md p-4">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-400 text-sm">Goals</span>
                      <span className="text-white">{player.stats.goals}</span>
                    </div>
                    <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#04f5ff]" 
                        style={{ width: `${(player.stats.goals / 30) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-400 text-sm">Assists</span>
                      <span className="text-white">{player.stats.assists}</span>
                    </div>
                    <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#f7a300]" 
                        style={{ width: `${(player.stats.assists / 20) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-400 text-sm">Yellow Cards</span>
                      <span className="text-white">{player.stats.yellowCards}</span>
                    </div>
                    <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#f7a300]" 
                        style={{ width: `${(player.stats.yellowCards / 10) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-400 text-sm">Red Cards</span>
                      <span className="text-white">{player.stats.redCards}</span>
                    </div>
                    <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-red-500" 
                        style={{ width: `${(player.stats.redCards / 3) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-400 text-sm">Minutes Played</span>
                      <span className="text-white">{player.stats.minutesPlayed}</span>
                    </div>
                    <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#04f5ff]" 
                        style={{ width: `${(player.stats.minutesPlayed / 3000) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};