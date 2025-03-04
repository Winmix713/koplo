import React from 'react';
import { Match } from '../../types/Match';
import { MatchCard } from './MatchCard';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { ErrorMessage } from '../common/ErrorMessage';

interface MatchListProps {
  matches: Match[];
  loading: boolean;
  error: string | null;
  title?: string;
  emptyMessage?: string;
}

export const MatchList: React.FC<MatchListProps> = ({
  matches,
  loading,
  error,
  title = 'Matches',
  emptyMessage = 'No matches found'
}) => {
  if (loading) {
    return (
      <div className="p-8 flex justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div>
      {title && <h2 className="text-xl font-bold text-white mb-4">{title}</h2>}
      
      {matches.length === 0 ? (
        <div className="bg-[#1a1a1a] p-6 rounded-md text-center text-gray-400">
          {emptyMessage}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {matches.map(match => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      )}
    </div>
  );
};