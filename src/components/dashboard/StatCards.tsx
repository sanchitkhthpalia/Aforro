import React from 'react';
import { Download, TrendingUp, ShoppingCart, Tag, UserPlus } from 'lucide-react';
import { toast } from 'sonner';
import { useUsers } from '../../hooks/useUsers';

const StatCards = () => {
  const { users } = useUsers();

  const handleExport = () => {
    if (!users || users.length === 0) {
      toast.error('No data to export');
      return;
    }

    // Create CSV header
    let csvContent = "Name,Email,Company,City\n";
    
    // Add rows
    users.forEach(user => {
      // Escape quotes and commas by wrapping in quotes
      const row = `"${user.name}","${user.email}","${user.company.name}","${user.address.city}"`;
      csvContent += row + "\n";
    });

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "users_export.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success('Exported sales summary as CSV');
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-base font-semibold text-slate-800">Today's Sales</h2>
          <p className="text-xs text-slate-500">Sales Summary</p>
        </div>
        <button 
          onClick={handleExport}
          className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors"
        >
          <Download size={14} />
          Export
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Sales */}
        <div className="bg-rose-50 rounded-xl p-3">
          <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center mb-3 shadow-sm">
            <TrendingUp size={16} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-1">$1k</h3>
          <p className="text-xs font-medium text-slate-600 mb-1.5">Total Sales</p>
          <p className="text-[10px] text-rose-500 font-medium">+8% from yesterday</p>
        </div>

        {/* Total Order */}
        <div className="bg-orange-50 rounded-xl p-3">
          <div className="w-8 h-8 rounded-full bg-orange-400 text-white flex items-center justify-center mb-3 shadow-sm">
            <ShoppingCart size={16} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-1">300</h3>
          <p className="text-xs font-medium text-slate-600 mb-1.5">Total Order</p>
          <p className="text-[10px] text-orange-500 font-medium">+5% from yesterday</p>
        </div>

        {/* Product Sold */}
        <div className="bg-emerald-50 rounded-xl p-3">
          <div className="w-8 h-8 rounded-full bg-emerald-400 text-white flex items-center justify-center mb-3 shadow-sm">
            <Tag size={16} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-1">5</h3>
          <p className="text-xs font-medium text-slate-600 mb-1.5">Product Sold</p>
          <p className="text-[10px] text-emerald-500 font-medium">+1.2% from yesterday</p>
        </div>

        {/* New Customers */}
        <div className="bg-purple-50 rounded-xl p-3">
          <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center mb-3 shadow-sm">
            <UserPlus size={16} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-1">8</h3>
          <p className="text-xs font-medium text-slate-600 mb-1.5">New Customers</p>
          <p className="text-[10px] text-purple-500 font-medium">+0.5% from yesterday</p>
        </div>
      </div>
    </div>
  );
};

export default StatCards;
