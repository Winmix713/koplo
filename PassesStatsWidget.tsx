import React from 'react';

interface PassesStatsData {
  passes: number;
  crosses: number;
  corners: number;
  shots: number;
}

interface PassesStatsWidgetProps {
  title: string;
  data: PassesStatsData;
}

export const PassesStats: React.FC<PassesStatsWidgetProps> = ({ title, data }) => {
  const stats = [
    { label: 'Passes', value: data.passes, color: '#04f5ff' },
    { label: 'Crosses', value: data.crosses, color: '#f7a300' },
    { label: 'Corners', value: data.corners, color: '#ff5a5a' },
    { label: 'Shots', value: data.shots, color: '#9c5fff' },
  ];
  
  return (
    <div className="bg-[#1a1a1a] rounded-md p-4 h-full">
      <h3 className="text-white font-medium mb-4">{title}</h3>
      
      <div className="h-[calc(100%-2rem)] flex flex-col justify-center">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-[#222] rounded-md p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400 text-sm">{stat.label}</span>
                <span className="text-white font-bold">{stat.value}%</span>
              </div>
              <div className="h-1 bg-[#333] rounded-full overflow-hidden">
                <div 
                  className="h-full" 
                  style={{ 
                    width: `${stat.value}%`,
                    backgroundColor: stat.color
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex justify-center">
          <div className="relative h-32 w-32">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              {stats.map((stat, index) => {
                const angle = (index / stats.length) * Math.PI * 2;
                const radius = 40 * (stat.value / 100);
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                
                return (
                  <g key={index}>
                    <line
                      x1="50"
                      y1="50"
                      x2={x}
                      y2={y}
                      stroke={stat.color}
                      strokeWidth="2"
                    />
                    <circle
                      cx={x}
                      cy={y}
                      r="3"
                      fill={stat.color}
                    />
                  </g>
                );
              })}
              
              {/* Background grid */}
              {[25, 50, 75, 100].map((value, index) => (
                <circle
                  key={index}
                  cx="50"
                  cy="50"
                  r={value * 0.4}
                  fill="none"
                  stroke="#333"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
              ))}
              
              {/* Connect the dots to form a polygon */}
              <polygon
                points={stats.map((stat, index) => {
                  const angle = (index / stats.length) * Math.PI * 2;
                  const radius = 40 * (stat.value / 100);
                  const x = 50 + radius * Math.cos(angle);
                  const y = 50 + radius * Math.sin(angle);
                  return `${x},${y}`;
                }).join(' ')}
                fill="rgba(4, 245, 255, 0.1)"
                stroke="#04f5ff"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};