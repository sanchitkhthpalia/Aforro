import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Jan', loyal: 300, new: 250, unique: 320 },
  { name: 'Feb', loyal: 350, new: 280, unique: 340 },
  { name: 'Mar', loyal: 320, new: 220, unique: 300 },
  { name: 'Apr', loyal: 280, new: 150, unique: 260 },
  { name: 'May', loyal: 300, new: 200, unique: 280 },
  { name: 'Jun', loyal: 340, new: 260, unique: 310 },
  { name: 'Jul', loyal: 380, new: 300, unique: 350 },
  { name: 'Aug', loyal: 350, new: 360, unique: 330 },
  { name: 'Sep', loyal: 330, new: 340, unique: 310 },
  { name: 'Oct', loyal: 300, new: 280, unique: 290 },
  { name: 'Nov', loyal: 250, new: 200, unique: 260 },
  { name: 'Dec', loyal: 180, new: 130, unique: 150 },
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
            <span className="font-semibold text-slate-800">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const VisitorInsights = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 h-full">
      <h2 className="text-base font-semibold text-slate-800 mb-4">Visitor Insights</h2>
      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8' }} dx={-10} />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4' }} />
            <Legend iconType="square" wrapperStyle={{ fontSize: '12px' }} />
            <Line type="monotone" dataKey="loyal" name="Loyal Customers" stroke="#a855f7" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="new" name="New Customers" stroke="#ef4444" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="unique" name="Unique Customers" stroke="#22c55e" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VisitorInsights;
