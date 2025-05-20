import { Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';

const DashboardLayout = () => {
  const { user } = useAuth();

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout; 