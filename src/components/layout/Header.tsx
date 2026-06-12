import React, { useState } from 'react';
import { Search, RotateCcw, CloudLightning, Menu } from 'lucide-react';
import { toast } from 'sonner';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const [isDeploying, setIsDeploying] = useState(false);

  const clearFilters = () => {
    // Quick hack to avoid lifting state to Context just for a single header button.
    window.dispatchEvent(new Event('clear-dashboard-filters'));
    toast.success('Filters cleared');
  };

  const handleDeploy = () => {
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
      toast.success('Infrastructure deployed successfully!');
    }, 1000);
  };

  return (
    <header className="h-16 bg-[#f8f9ff] px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button 
          onClick={onMenuClick}
          className="lg:hidden text-slate-500 hover:text-slate-700 hover:bg-slate-100 p-1.5 rounded-md transition-colors"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-xl font-bold text-slate-800 hidden sm:block">Dashboard</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Search here..." 
            className="w-64 bg-white border-none rounded-full py-2 pl-9 pr-4 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm"
          />
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={clearFilters}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <RotateCcw size={14} />
            Clear
          </button>
          <button 
            onClick={handleDeploy}
            disabled={isDeploying}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 text-white rounded-lg text-xs font-medium hover:bg-slate-700 transition-colors shadow-sm disabled:opacity-70"
          >
            <CloudLightning size={14} className={isDeploying ? "animate-pulse" : ""} />
            {isDeploying ? 'Deploying...' : 'Deploy'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
