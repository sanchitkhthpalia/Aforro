import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Monday', online: 14000, offline: 12000 },
  { name: 'Tuesday', online: 17000, offline: 11000 },
  { name: 'Wednesday', online: 8000, offline: 22000 },
  { name: 'Thursday', online: 15000, offline: 9000 },
  { name: 'Friday', online: 12000, offline: 11000 },
  { name: 'Saturday', online: 16000, offline: 13000 },
  { name: 'Sunday', online: 21, offline: 11 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-slate-100 text-xs">
        <p className="font-semibold text-slate-800 mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 mb-1 last:mb-0">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-slate-500 capitalize">{entry.name}:</span>
            <span className="font-semibold text-slate-800">{entry.value}k</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const TotalRevenue = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 h-full">
      <h2 className="text-base font-semibold text-slate-800 mb-4">Total Revenue</h2>
      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 5, left: -10, bottom: 5 }} barGap={8}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} tickFormatter={(value) => `${value}k`} dx={-10} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc' }} />
            <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
            <Bar dataKey="online" name="Online Sales" fill="#3b82f6" radius={[4, 4, 4, 4]} barSize={12} />
            <Bar dataKey="offline" name="Offline Sales" fill="#14b8a6" radius={[4, 4, 4, 4]} barSize={12} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalRevenue;
