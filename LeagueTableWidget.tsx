import React from 'react';
import { Link } from 'react-router-dom';

interface LeagueTableTeam {
  position: number;
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  points: number;
}

interface LeagueTableWidgetProps {
  title: string;
  teams: LeagueTableTeam[];
}

export const LeagueTable: React.FC<LeagueTableWidgetProps> = ({ title, teams }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-md p-4 h-full">
      <h3 className="text-white font-medium mb-4">{title}</h3>
      
      <div className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-gray-400 text-xs border-b border-[#333]">
              <th className="pb-2 text-left font-normal">#</th>
              <th className="pb-2 text-left font-normal">Team</th>
              <th className="pb-2 text-center font-normal">P</th>
              <th className="pb-2 text-center font-normal">W</th>
              <th className="pb-2 text-center font-normal">D</th>
              <th className="pb-2 text-center font-normal">L</th>
              <th className="pb-2 text-right font-normal">PTS</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr 
                key={index} 
                className={`text-sm border-b border-[#333] last:border-0 ${
                  index < 4 ? 'text-white' : 'text-gray-400'
                }`}
              >
                <td className="py-2 text-left">
                  <span className={`inline-block w-5 h-5 rounded-full text-xs flex items-center justify-center ${
                    index === 0 ? 'bg-[#04f5ff] text-black' : 
                    index < 4 ? 'bg-[#222]' : 'bg-transparent'
                  }`}>
                    {team.position}
                  </span>
                </td>
                <td className="py-2 text-left">{team.name}</td>
                <td className="py-2 text-center">{team.played}</td>
                <td className="py-2 text-center">{team.won}</td>
                <td className="py-2 text-center">{team.drawn}</td>
                <td className="py-2 text-center">{team.lost}</td>
                <td className="py-2 text-right font-bold">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-center">
        <Link to="/standings" className="text-[#04f5ff] text-sm hover:underline">
          View Full Table
        </Link>
      </div>
    </div>
  );
};