import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import {
  CalendarIcon,
  UserGroupIcon,
  ClockIcon,
  CogIcon,
  BuildingStorefrontIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

const DashboardSidebar = () => {
  const { user } = useAuth();
  const location = useLocation();

  // Navigation items based on user role
  const navigationItems = {
    customer: [
      { name: 'My Appointments', href: '/dashboard', icon: CalendarIcon },
      { name: 'Book Appointment', href: '/dashboard/book', icon: ClockIcon },
      { name: 'Profile', href: '/dashboard/profile', icon: UserIcon },
    ],
    employee: [
      { name: 'Schedule', href: '/dashboard', icon: CalendarIcon },
      { name: 'My Clients', href: '/dashboard/clients', icon: UserGroupIcon },
      { name: 'Profile', href: '/dashboard/profile', icon: UserIcon },
    ],
    owner: [
      { name: 'Overview', href: '/dashboard', icon: BuildingStorefrontIcon },
      { name: 'Appointments', href: '/dashboard/appointments', icon: CalendarIcon },
      { name: 'Employees', href: '/dashboard/employees', icon: UserGroupIcon },
      { name: 'Settings', href: '/dashboard/settings', icon: CogIcon },
    ],
    admin: [
      { name: 'Overview', href: '/dashboard', icon: BuildingStorefrontIcon },
      { name: 'Businesses', href: '/dashboard/businesses', icon: BuildingStorefrontIcon },
      { name: 'Users', href: '/dashboard/users', icon: UserGroupIcon },
      { name: 'Settings', href: '/dashboard/settings', icon: CogIcon },
    ],
  };

  const currentNavigation = navigationItems[user?.role || 'customer'];

  return (
    <div className="bg-white shadow-sm border-r border-gray-200 h-full md:h-screen overflow-y-auto">
      <nav className="px-4 py-6">
        <div className="space-y-2">
          {currentNavigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center p-2 text-base rounded-lg ${
                  isActive
                    ? 'bg-barbershop-blue text-white'
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
              >
                <item.icon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                <span className="ml-3">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default DashboardSidebar; 