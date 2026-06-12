import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', lastMonth: 200, thisMonth: 300 },
  { name: 'Feb', lastMonth: 250, thisMonth: 350 },
  { name: 'Mar', lastMonth: 220, thisMonth: 380 },
  { name: 'Apr', lastMonth: 180, thisMonth: 320 },
  { name: 'May', lastMonth: 280, thisMonth: 400 },
  { name: 'Jun', lastMonth: 250, thisMonth: 420 },
  { name: 'Jul', lastMonth: 320, thisMonth: 450 },
];

const CustomerSatisfaction = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 h-full">
      <h2 className="text-base font-semibold text-slate-800 mb-4">Customer Satisfaction</h2>
      <div className="h-40 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorLast" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorThis" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip />
            <Area type="smooth" dataKey="lastMonth" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorLast)" />
            <Area type="smooth" dataKey="thisMonth" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorThis)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-center gap-8 border-t border-slate-100 pt-3">
        <div className="text-center">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="text-xs text-slate-500">Last Month</span>
          </div>
          <p className="text-base font-bold text-slate-800">$3,004</p>
        </div>
        <div className="text-center">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs text-slate-500">This Month</span>
          </div>
          <p className="text-base font-bold text-slate-800">$4,504</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
