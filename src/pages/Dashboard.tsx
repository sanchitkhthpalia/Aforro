import React from 'react';
import StatCards from '../components/dashboard/StatCards';
import VisitorInsights from '../components/dashboard/VisitorInsights';
import TotalRevenue from '../components/dashboard/TotalRevenue';
import CustomerSatisfaction from '../components/dashboard/CustomerSatisfaction';
import TargetVsReality from '../components/dashboard/TargetVsReality';
import TopProducts from '../components/dashboard/TopProducts';
import SalesMapping from '../components/dashboard/SalesMapping';
import VolumeVsService from '../components/dashboard/VolumeVsService';
import UsersTable from '../components/table/UsersTable';

const Dashboard = () => {
  return (
    <div className="space-y-4">
      {/* Top Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <div className="xl:col-span-2">
          <StatCards />
        </div>
        <div className="xl:col-span-1">
          <VisitorInsights />
        </div>
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-5">
          <TotalRevenue />
        </div>
        <div className="lg:col-span-4">
          <CustomerSatisfaction />
        </div>
        <div className="lg:col-span-3">
          <TargetVsReality />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1">
          <TopProducts />
        </div>
        <div className="lg:col-span-1">
          <SalesMapping />
        </div>
        <div className="lg:col-span-1">
          <VolumeVsService />
        </div>
      </div>

      {/* API Data Table Row */}
      <UsersTable />
    </div>
  );
};

export default Dashboard;
