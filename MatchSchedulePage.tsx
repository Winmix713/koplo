import React, { useState, useEffect } from 'react';
import { Calendar, Filter } from 'lucide-react';
import { MatchList } from '../modules/MatchList';
import { SearchBar } from '../common/SearchBar';
import { fetchMatches } from '../../utils/api';
import { Match } from '../../types/Match';

export const MatchSchedulePage: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [filteredMatches, setFilteredMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'live' | 'upcoming' | 'finished'>('all');
  
  useEffect(() => {
    const loadMatches = async () => {
      try {
        const data = await fetchMatches();
        setMatches(data);
        setFilteredMatches(data);
      } catch (err) {
        setError('Failed to load matches. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    loadMatches();
  }, []);
  
  useEffect(() => {
    filterMatches(activeFilter);
  }, [matches, activeFilter]);
  
  const filterMatches = (filter: 'all' | 'live' | 'upcoming' | 'finished') => {
    switch (filter) {
      case 'live':
        setFilteredMatches(matches.filter(match => match.status === 'live'));
        break;
      case 'upcoming':
        setFilteredMatches(matches.filter(match => match.status === 'scheduled'));
        break;
      case 'finished':
        setFilteredMatches(matches.filter(match => match.status === 'finished'));
        break;
      default:
        setFilteredMatches(matches);
    }
  };
  
  const handleSearch = (query: string) => {
    if (!query.trim()) {
      filterMatches(activeFilter);
      return;
    }
    
    const lowerQuery = query.toLowerCase();
    const results = filteredMatches.filter(match => 
      match.homeTeam.name.toLowerCase().includes(lowerQuery) ||
      match.awayTeam.name.toLowerCase().includes(lowerQuery) ||
      match.league.name.toLowerCase().includes(lowerQuery)
    );
    
    setFilteredMatches(results);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-2xl font-bold text-white mb-4 md:mb-0">Match Schedule</h1>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-64">
            <SearchBar onSearch={handleSearch} placeholder="Search matches..." />
          </div>
          
          <div className="flex bg-[#1a1a1a] rounded-md">
            <button
              className={`flex-1 py-2 px-3 text-sm rounded-l-md ${
                activeFilter === 'all' 
                  ? 'bg-[#04f5ff] text-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button
              className={`flex-1 py-2 px-3 text-sm ${
                activeFilter === 'live' 
                  ? 'bg-[#04f5ff] text-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveFilter('live')}
            >
              Live
            </button>
            <button
              className={`flex-1 py-2 px-3 text-sm ${
                activeFilter === 'upcoming' 
                  ? 'bg-[#04f5ff] text-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveFilter('upcoming')}
            >
              Upcoming
            </button>
            <button
              className={`flex-1 py-2 px-3 text-sm rounded-r-md ${
                activeFilter === 'finished' 
                  ? 'bg-[#04f5ff] text-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveFilter('finished')}
            >
              Finished
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-[#1a1a1a] rounded-md p-4 mb-6 flex items-center">
        <Calendar className="text-[#04f5ff] mr-2" size={20} />
        <span className="text-white">Today, July 15, 2024</span>
        <button className="ml-auto flex items-center text-gray-400 hover:text-white">
          <Filter size={16} className="mr-1" />
          <span className="text-sm">More Filters</span>
        </button>
      </div>
      
      <MatchList 
        matches={filteredMatches}
        loading={loading}
        error={error}
        title=""
        emptyMessage={`No ${activeFilter !== 'all' ? activeFilter : ''} matches found`}
      />
    </div>
  );
};