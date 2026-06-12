import React from 'react';
import { Toaster } from 'sonner';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Toaster position="bottom-right" theme="light" />
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </>
  );
}

export default App;
