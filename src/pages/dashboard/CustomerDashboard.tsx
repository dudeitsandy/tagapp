import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const CustomerDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const mockAppointments = [
    {
      id: '1',
      date: new Date().toISOString(),
      status: 'scheduled',
      serviceId: 'service1',
      barberId: 'barber1'
    },
    {
      id: '2',
      date: new Date(Date.now() + 86400000).toISOString(),
      status: 'scheduled',
      serviceId: 'service2',
      barberId: 'barber1'
    }
  ];

  const handleEdit = (appointment: any) => {
    navigate('/dashboard/book', {
      state: { appointment }
    });
  };

  const handleCancel = async (appointmentId: string) => {
    if (confirm('Are you sure you want to cancel this appointment?')) {
      // TODO: Implement cancellation
      alert('Cancellation coming soon');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Appointments</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <ul className="divide-y divide-gray-200">
          {mockAppointments.map(apt => (
            <li key={apt.id} className="py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Appointment: {new Date(apt.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    Time: {new Date(apt.date).toLocaleTimeString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    Status: {apt.status}
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleEdit(apt)}
                    className="text-barbershop-blue hover:text-blue-700 text-sm font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleCancel(apt.id)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomerDashboard; 