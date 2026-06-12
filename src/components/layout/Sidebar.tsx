import React, { useState } from 'react';
import { 
  PieChart, 
  BarChart2, 
  ShoppingCart, 
  ShoppingBag, 
  TrendingUp, 
  MessageSquare, 
  Settings, 
  LogOut,
  Zap
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className={`fixed inset-y-0 left-0 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition duration-300 ease-in-out w-56 h-screen bg-white border-r border-slate-100 flex flex-col justify-between p-4`}>
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
            D
          </div>
          <span className="text-lg font-bold text-slate-800">Dabang</span>
        </div>

        <nav className="space-y-1">
          <NavItem icon={<PieChart size={18} />} label="Dashboard" active={activeTab === 'Dashboard'} onClick={() => setActiveTab('Dashboard')} />
          <NavItem icon={<BarChart2 size={18} />} label="Leaderboard" active={activeTab === 'Leaderboard'} onClick={() => setActiveTab('Leaderboard')} />
          <NavItem icon={<ShoppingCart size={18} />} label="Order" active={activeTab === 'Order'} onClick={() => setActiveTab('Order')} />
          <NavItem icon={<ShoppingBag size={18} />} label="Products" active={activeTab === 'Products'} onClick={() => setActiveTab('Products')} />
          <NavItem icon={<TrendingUp size={18} />} label="Sales Report" active={activeTab === 'Sales Report'} onClick={() => setActiveTab('Sales Report')} />
          <NavItem icon={<MessageSquare size={18} />} label="Messages" active={activeTab === 'Messages'} onClick={() => setActiveTab('Messages')} />
          <NavItem icon={<Settings size={18} />} label="Settings" active={activeTab === 'Settings'} onClick={() => setActiveTab('Settings')} />
          <NavItem icon={<LogOut size={18} />} label="Sign Out" onClick={() => {}} />
        </nav>
      </div>

      <div className="bg-primary/10 rounded-xl p-4 text-center mt-auto">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-2">
          <Zap size={16} />
        </div>
        <h4 className="font-bold text-sm text-slate-800 mb-1">Dabang Pro</h4>
        <p className="text-[10px] text-slate-500 mb-3 leading-tight">Get access to all features on tetumbas</p>
        <button className="w-full bg-white text-primary text-xs font-semibold py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          Get Pro
        </button>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) => {
  return (
    <a 
      href="#" 
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${
        active 
          ? 'bg-primary text-white shadow-sm shadow-primary/20' 
          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </a>
  );
};

export default Sidebar;
