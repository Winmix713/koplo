import React from 'react';

interface AttendanceWidgetProps {
  title: string;
  subtitle: string;
  value: string;
  subtitle2: string;
}

export const AttendanceChart: React.FC<AttendanceWidgetProps> = ({
  title,
  subtitle,
  value,
  subtitle2
}) => {
  return (
    <div className="bg-[#1a1a1a] rounded-md p-4 h-full">
      <h3 className="text-white font-medium mb-4">{title}</h3>
      
      <div className="flex flex-col items-center justify-center h-[calc(100%-2rem)]">
        <span className="text-gray-400 text-sm mb-2">{subtitle}</span>
        <span className="text-white text-4xl font-bold mb-2">{value}</span>
        <span className="text-[#04f5ff] text-sm">{subtitle2}</span>
        
        <div className="w-full mt-6">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>0</span>
            <span>25k</span>
            <span>50k</span>
            <span>75k</span>
            <span>100k</span>
          </div>
          <div className="h-2 bg-[#222] rounded-full overflow-hidden">
            <div className="h-full bg-[#04f5ff]" style={{ width: '82%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};