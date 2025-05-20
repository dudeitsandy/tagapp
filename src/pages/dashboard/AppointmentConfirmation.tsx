import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { mockBarbers, mockServices } from '../../services/mockData';
import { format } from 'date-fns';

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

  const barber = mockBarbers.find(b => b.id === appointmentData.barberId);
  const service = mockServices.find(s => s.id === appointmentData.serviceId);

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="text-center mb-8">
        <CheckCircleIcon className="mx-auto h-12 w-12 text-green-500" />
        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          Appointment Confirmed!
        </h2>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Appointment Details
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {appointmentData.name}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Date & Time</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {format(new Date(appointmentData.appointmentDate), 'PPpp')}
              </dd>
            </div>
            {barber && (
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Barber</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {barber.name}
                </dd>
              </div>
            )}
            {service && (
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Service</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {service.name} - ${service.price}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>

      <div className="mt-8 flex justify-center space-x-4">
        <button
          onClick={() => navigate('/dashboard')}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-barbershop-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-barbershop-blue"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default AppointmentConfirmation; 