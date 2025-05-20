import { Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import CustomerDashboard from '../pages/dashboard/CustomerDashboard';
import EmployeeDashboard from '../pages/dashboard/EmployeeDashboard';

const DashboardLayout = () => {
  const { user } = useAuth();

  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto p-8">
        {user?.role === 'employee' ? <EmployeeDashboard /> : <CustomerDashboard />}
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout; 