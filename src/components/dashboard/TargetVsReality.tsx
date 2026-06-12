import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ShoppingBag, Ticket } from 'lucide-react';

const data = [
  { name: 'Jan', reality: 8000, target: 10000 },
  { name: 'Feb', reality: 7000, target: 12000 },
  { name: 'Mar', reality: 9000, target: 11000 },
  { name: 'Apr', reality: 11000, target: 14000 },
  { name: 'May', reality: 13000, target: 12000 },
  { name: 'June', reality: 15000, target: 15000 },
  { name: 'July', reality: 14000, target: 16000 },
];

const TargetVsReality = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 h-full flex flex-col">
      <h2 className="text-base font-semibold text-slate-800 mb-4">Target vs Reality</h2>
      <div className="h-40 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} barGap={4}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
            <Tooltip cursor={{ fill: 'transparent' }} />
            <Bar dataKey="reality" name="Reality Sales" fill="#10b981" radius={[4, 4, 4, 4]} barSize={12} />
            <Bar dataKey="target" name="Target Sales" fill="#f59e0b" radius={[4, 4, 4, 4]} barSize={12} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3 mt-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center">
              <ShoppingBag size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Reality Sales</p>
              <p className="text-[10px] text-slate-500">Global</p>
            </div>
          </div>
          <span className="text-xs font-bold text-emerald-500">8.823</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center">
              <Ticket size={16} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Target Sales</p>
              <p className="text-[10px] text-slate-500">Commercial</p>
            </div>
          </div>
          <span className="text-xs font-bold text-amber-500">12.122</span>
        </div>
      </div>
    </div>
  );
};

export default TargetVsReality;
