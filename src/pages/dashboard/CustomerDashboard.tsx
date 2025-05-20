import { useAuth } from '../../contexts/AuthContext';
import { generateMockAppointments } from '../../services/mockData';
import { format } from 'date-fns';

const CustomerDashboard = () => {
  const { user } = useAuth();
  const appointments = generateMockAppointments(user?.id || '');

  const upcomingAppointments = appointments.filter(apt => apt.status === 'scheduled');
  const pastAppointments = appointments.filter(apt => apt.status === 'completed');

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Appointments</h1>
      
      {/* Upcoming Appointments */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Upcoming Appointments</h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          {upcomingAppointments.length === 0 ? (
            <p className="p-4 text-gray-500">No upcoming appointments</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {upcomingAppointments.map(appointment => (
                <li key={appointment.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-barbershop-blue">
                        {format(new Date(appointment.date), 'PPP')}
                      </p>
                      <p className="text-sm text-gray-500">
                        {format(new Date(appointment.date), 'p')}
                      </p>
                    </div>
                    <button
                      className="ml-4 text-sm text-red-600 hover:text-red-800"
                      onClick={() => {
                        // TODO: Add cancellation functionality
                        alert('Cancellation coming soon');
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Past Appointments */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Past Appointments</h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          {pastAppointments.length === 0 ? (
            <p className="p-4 text-gray-500">No past appointments</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {pastAppointments.map(appointment => (
                <li key={appointment.id} className="p-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {format(new Date(appointment.date), 'PPP')}
                    </p>
                    <p className="text-sm text-gray-500">
                      {format(new Date(appointment.date), 'p')}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard; 