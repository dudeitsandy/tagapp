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
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <div className="w-full md:w-64 flex-shrink-0">
        <DashboardSidebar />
      </div>
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {isIndexRoute ? (
            user?.role === 'employee' ? <EmployeeDashboard /> : <CustomerDashboard />
          ) : (
            <Outlet />
          )}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout; 