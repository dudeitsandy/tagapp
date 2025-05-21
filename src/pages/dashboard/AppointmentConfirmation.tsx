import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { mockBarbers, mockServices } from '../../services/mockData';

const AppointmentConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const appointmentData = location.state?.appointmentData;

  if (!appointmentData) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">No appointment data found.</p>
        <button
          onClick={() => navigate('/dashboard')}
          className="mt-4 text-barbershop-blue hover:text-blue-700"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  const service = mockServices.find(s => s.id === appointmentData.serviceId);
  const barber = mockBarbers.find(b => b.id === appointmentData.barberId);
  const appointmentDate = new Date(appointmentData.appointmentDate);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <CheckCircleIcon className="mx-auto h-12 w-12 text-green-500" />
        <h2 className="mt-4 text-2xl font-bold text-gray-900">Appointment Confirmed!</h2>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">Appointment Details</h3>
            <div className="mt-2 text-sm text-gray-500">
              <p>Date: {appointmentDate.toLocaleDateString()}</p>
              <p>Time: {appointmentDate.toLocaleTimeString()}</p>
              <p>Service: {service?.name}</p>
              <p>Barber: {barber?.name}</p>
              {appointmentData.notes && <p>Notes: {appointmentData.notes}</p>}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-lg font-medium text-gray-900">What's Next?</h3>
            <ul className="mt-2 text-sm text-gray-500 list-disc list-inside">
              <li>You'll receive a confirmation email shortly</li>
              <li>Arrive 5-10 minutes before your appointment</li>
              <li>You can view or modify this appointment from your dashboard</li>
            </ul>
          </div>

          <div className="flex justify-between pt-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="text-barbershop-blue hover:text-blue-700"
            >
              Return to Dashboard
            </button>
            <button
              onClick={() => {
                // TODO: Implement add to calendar
                alert('Add to calendar coming soon');
              }}
              className="text-barbershop-blue hover:text-blue-700"
            >
              Add to Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentConfirmation; 