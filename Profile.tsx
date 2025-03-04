import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { fetchTeams } from '../../utils/api';
import { Team } from '../../types/Team';

export const Profile: React.FC = () => {
  const { user, updateUser, logout } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [favoriteTeam, setFavoriteTeam] = useState(user?.favoriteTeam || '');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [teams, setTeams] = useState<Team[]>([]);
  const [loadingTeams, setLoadingTeams] = useState(true);

  React.useEffect(() => {
    const loadTeams = async () => {
      try {
        const teamsData = await fetchTeams();
        setTeams(teamsData);
      } catch (error) {
        console.error('Failed to load teams:', error);
      } finally {
        setLoadingTeams(false);
      }
    };

    loadTeams();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      updateUser({
        name,
        favoriteTeam
      });
      
      setSuccess(true);
    } catch (error) {
      console.error('Failed to update profile:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="p-8 text-center">
        <p className="text-white">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">Your Profile</h1>
        
        <div className="bg-[#1a1a1a] rounded-md p-6">
          {success && (
            <div className="bg-green-900/20 border border-green-800 text-white p-3 rounded-md mb-4">
              Profile updated successfully!
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-400 mb-1">Email</label>
              <input
                id="email"
                type="email"
                value={user.email}
                disabled
                className="w-full bg-[#222] border border-[#333] text-gray-400 rounded-md py-2 px-3"
              />
              <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
            </div>
            
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-400 mb-1">Full Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#222] border border-[#333] text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#04f5ff] focus:border-[#04f5ff]"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="favoriteTeam" className="block text-gray-400 mb-1">Favorite Team</label>
              {loadingTeams ? (
                <div className="py-2">
                  <LoadingSpinner size="small" />
                </div>
              ) : (
                <select
                  id="favoriteTeam"
                  value={favoriteTeam}
                  onChange={(e) => setFavoriteTeam(e.target.value)}
                  className="w-full bg-[#222] border border-[#333] text-white rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-[#04f5ff] focus:border-[#04f5ff]"
                >
                  <option value="">Select a team</option>
                  {teams.map(team => (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
            
            <div className="flex justify-between">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#04f5ff] text-black font-medium py-2 px-6 rounded-md hover:bg-[#03d8e0] transition-colors"
              >
                {loading ? <LoadingSpinner size="small" color="#000" /> : 'Save Changes'}
              </button>
              
              <button
                type="button"
                onClick={logout}
                className="bg-[#222] text-white font-medium py-2 px-6 rounded-md hover:bg-[#333] transition-colors"
              >
                Log Out
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};