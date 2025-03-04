import React from 'react';

interface TeamStatsCardProps {
  title: string;
  stats: {
    label: string;
    value: number;
    max: number;
    color: string;
  }[];
}

export const TeamStatsCard: React.FC<TeamStatsCardProps> = ({ title, stats }) => {
  return (
    <div className="bg-[#1a1a1a] rounded-md p-4 h-full">
      <h3 className="text-white font-medium mb-4">{title}</h3>
      
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-400 text-sm">{stat.label}</span>
              <span className="text-white font-medium">{stat.value}</span>
            </div>
            <div className="h-2 bg-[#222] rounded-full overflow-hidden">
              <div 
                className="h-full" 
                style={{ 
                  width: `${(stat.value / stat.max) * 100}%`,
                  backgroundColor: stat.color
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};