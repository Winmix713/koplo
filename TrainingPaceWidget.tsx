import React from 'react';

interface TrainingData {
  time: string;
  value1: number;
  value2: number;
}

interface TrainingPaceWidgetProps {
  title: string;
  data: TrainingData[];
}

export const TrainingPaceChart: React.FC<TrainingPaceWidgetProps> = ({ title, data }) => {
  const maxValue = Math.max(
    ...data.map(item => Math.max(item.value1, item.value2))
  );
  
  return (
    <div className="bg-[#1a1a1a] rounded-md p-4 h-full">
      <h3 className="text-white font-medium mb-4">{title}</h3>
      
      <div className="h-[calc(100%-2rem)]">
        <div className="flex justify-between mb-2">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-[#04f5ff] mr-1"></div>
            <span className="text-xs text-gray-400">First Team</span>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-full bg-[#f7a300] mr-1"></div>
            <span className="text-xs text-gray-400">Reserve Team</span>
          </div>
        </div>
        
        <div className="relative h-40 mt-4">
          {/* Y-axis grid lines */}
          {[0, 25, 50, 75, 100].map((value, index) => (
            <div 
              key={index}
              className="absolute w-full h-px bg-[#333]"
              style={{ bottom: `${(value / 100) * 100}%` }}
            >
              <span className="absolute -left-6 -top-2 text-xs text-gray-400">
                {value}
              </span>
            </div>
          ))}
          
          {/* Chart lines */}
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            {/* First team line */}
            <polyline
              points={data.map((item, index) => 
                `${(index / (data.length - 1)) * 100}% ${100 - (item.value1 / maxValue) * 100}%`
              ).join(' ')}
              fill="none"
              stroke="#04f5ff"
              strokeWidth="2"
            />
            
            {/* Reserve team line */}
            <polyline
              points={data.map((item, index) => 
                `${(index / (data.length - 1)) * 100}% ${100 - (item.value2 / maxValue) * 100}%`
              ).join(' ')}
              fill="none"
              stroke="#f7a300"
              strokeWidth="2"
            />
          </svg>
          
          {/* Data points */}
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <div 
                className="absolute h-2 w-2 rounded-full bg-[#04f5ff]"
                style={{ 
                  left: `calc(${(index / (data.length - 1)) * 100}% - 4px)`, 
                  bottom: `calc(${(item.value1 / maxValue) * 100}% - 4px)` 
                }}
              ></div>
              <div 
                className="absolute h-2 w-2 rounded-full bg-[#f7a300]"
                style={{ 
                  left: `calc(${(index / (data.length - 1)) * 100}% - 4px)`, 
                  bottom: `calc(${(item.value2 / maxValue) * 100}% - 4px)` 
                }}
              ></div>
            </React.Fragment>
          ))}
        </div>
        
        {/* X-axis labels */}
        <div className="flex justify-between mt-2">
          {data.map((item, index) => (
            <span key={index} className="text-xs text-gray-400">
              {item.time}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};