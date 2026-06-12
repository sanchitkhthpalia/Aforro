import React from 'react';
import { ResponsiveContainer, BarChart, Bar, Tooltip } from 'recharts';

const data = [
  { name: '1', volume: 80, service: 45 },
  { name: '2', volume: 100, service: 55 },
  { name: '3', volume: 85, service: 50 },
  { name: '4', volume: 70, service: 40 },
  { name: '5', volume: 55, service: 35 },
  { name: '6', volume: 60, service: 45 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded-lg shadow border border-slate-100 text-xs">
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 mb-1 last:mb-0">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-slate-500 capitalize">{entry.name}:</span>
            <span className="font-semibold text-slate-800">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const VolumeVsService = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 h-full flex flex-col">
      <h2 className="text-base font-semibold text-slate-800 mb-6">Volume vs Service Level</h2>
      <div className="flex-1 min-h-[140px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} barSize={10}>
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
            <Bar dataKey="service" name="Services" fill="#10b981" stackId="a" radius={[0, 0, 4, 4]} />
            <Bar dataKey="volume" name="Volume" fill="#0ea5e9" stackId="a" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-slate-50">
        <div className="text-center">
          <p className="text-xs text-slate-400 mb-1 flex items-center justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0ea5e9]"></span>
            Volume
          </p>
          <p className="text-sm font-bold text-slate-800">1,135</p>
        </div>
        <div className="w-px h-8 bg-slate-100"></div>
        <div className="text-center">
          <p className="text-xs text-slate-400 mb-1 flex items-center justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
            Services
          </p>
          <p className="text-sm font-bold text-slate-800">635</p>
        </div>
      </div>
    </div>
  );
};

export default VolumeVsService;
