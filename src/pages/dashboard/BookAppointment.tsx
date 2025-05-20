import { useAuth } from '../../contexts/AuthContext';

const BookAppointment = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Book an Appointment</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600">
          Appointment booking functionality coming soon...
        </p>
        {/* Placeholder for appointment booking form */}
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <p className="text-sm text-gray-500">
            You will be able to:
          </p>
          <ul className="mt-2 list-disc list-inside text-sm text-gray-500">
            <li>Select your preferred barber</li>
            <li>Choose available time slots</li>
            <li>Select services</li>
            <li>Add special requests</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment; 