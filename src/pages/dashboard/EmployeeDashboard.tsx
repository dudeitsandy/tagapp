import { useAuth } from '../../contexts/AuthContext';

const EmployeeDashboard = () => {
  const { user } = useAuth();

  const mockAppointments = [
    {
      id: '1',
      date: new Date().toISOString(),
      customerName: 'John Doe',
      status: 'scheduled'
    },
    {
      id: '2',
      date: new Date(Date.now() + 86400000).toISOString(),
      customerName: 'Jane Smith',
      status: 'scheduled'
    }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Today's Schedule</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <ul className="divide-y divide-gray-200">
          {mockAppointments.map(apt => (
            <li key={apt.id} className="py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Time: {new Date(apt.date).toLocaleTimeString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    Customer: {apt.customerName}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${
                    apt.status === 'scheduled'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {apt.status}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeDashboard; 