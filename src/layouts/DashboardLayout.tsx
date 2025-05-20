import { Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import CustomerDashboard from '../pages/dashboard/CustomerDashboard';
import EmployeeDashboard from '../pages/dashboard/EmployeeDashboard';

const DashboardLayout = () => {
  const { user } = useAuth();
  const location = useLocation();

  // Only show dashboard on index route
  const isIndexRoute = location.pathname === '/dashboard';

  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto p-8">
        {isIndexRoute ? (
          user?.role === 'employee' ? <EmployeeDashboard /> : <CustomerDashboard />
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
};

export default DashboardLayout; 