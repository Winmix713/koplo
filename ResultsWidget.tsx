import React from 'react';

interface ResultsData {
  label: string;
  value: number;
  color: string;
}

interface ResultsWidgetProps {
  title: string;
  data: ResultsData[];
}

export const ResultsChart: React.FC<ResultsWidgetProps> = ({ title, data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <div className="bg-[#1a1a1a] rounded-md p-4 h-full">
      <h3 className="text-white font-medium mb-4">{title}</h3>
      
      <div className="flex flex-col h-[calc(100%-2rem)]">
        <div className="flex-1 flex items-center justify-center">
          <div className="relative h-32 w-32">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              {data.map((item, index) => {
                const percentage = (item.value / total) * 100;
                const startAngle = index === 0 ? 0 : data
                  .slice(0, index)
                  .reduce((sum, prev) => sum + (prev.value / total) * 360, 0);
                const endAngle = startAngle + (percentage * 360 / 100);
                
                // Convert angles to radians for calculations
                const startRad = (startAngle - 90) * Math.PI / 180;
                const endRad = (endAngle - 90) * Math.PI / 180;
                
                // Calculate path
                const x1 = 50 + 40 * Math.cos(startRad);
                const y1 = 50 + 40 * Math.sin(startRad);
                const x2 = 50 + 40 * Math.cos(endRad);
                const y2 = 50 + 40 * Math.sin(endRad);
                
                // Determine if the arc should be drawn as a large arc
                const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
                
                // Create the path
                const path = `
                  M 50 50
                  L ${x1} ${y1}
                  A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}
                  Z
                `;
                
                return (
                  <path
                    key={index}
                    d={path}
                    fill={item.color}
                  />
                );
              })}
              <circle cx="50" cy="50" r="25" fill="#1a1a1a" />
            </svg>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mt-4">
          {data.map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-1">
                <div 
                  className="h-3 w-3 rounded-full mr-1" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-xs text-gray-400">{item.label}</span>
              </div>
              <span className="text-white font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};