import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { mockBarbers, mockServices } from '../../services/mockData';

interface BookingFormData {
  serviceId: string;
  barberId: string;
  appointmentDate: string;
  notes?: string;
  customerId?: string; // For when employees book for customers
}

const BookAppointment = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const editAppointment = location.state?.appointment; // For editing existing appointments
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: editAppointment?.serviceId || '',
    barberId: editAppointment?.barberId || '',
    appointmentDate: editAppointment?.date || '',
    notes: editAppointment?.notes || '',
    customerId: editAppointment?.customerId || ''
  });

  // Check if user has permission to book/edit appointments
  const canBookForOthers = user?.role === 'employee' || user?.role === 'admin';
  const isEditing = Boolean(editAppointment);

  // Get today's date in YYYY-MM-DDThh:mm format for min datetime-local
  const today = new Date();
  const minDateTime = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 16);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (isEditing) {
        // TODO: Handle edit
        navigate('/dashboard', { 
          state: { message: 'Appointment updated successfully' }
        });
      } else {
        navigate('/dashboard/appointments/confirm', {
          state: { appointmentData: formData }
        });
      }
    } catch (err) {
      setError(isEditing ? 'Failed to update appointment' : 'Failed to book appointment');
    } finally {
      setIsLoading(false);
    }
  };

  // Optional customer selection for employees
  const renderCustomerSelect = () => {
    if (!canBookForOthers) return null;

    return (
      <div>
        <label htmlFor="customerId" className="block text-sm font-medium text-gray-700">
          Customer
        </label>
        <input 
          type="text"
          id="customerId"
          name="customerId"
          placeholder="Customer ID or search"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-barbershop-blue focus:border-barbershop-blue sm:text-sm"
        />
      </div>
    );
  };

  // Add cancel button if editing
  const renderActionButtons = () => (
    <div className="flex space-x-4">
      {isEditing && (
        <button
          type="button"
          onClick={() => navigate('/dashboard')}
          className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-barbershop-blue"
        >
          Cancel
        </button>
      )}
      <button
        type="submit"
        disabled={isLoading}
        className={`flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-barbershop-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-barbershop-blue
          ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isLoading ? 'Saving...' : isEditing ? 'Update Appointment' : 'Book Appointment'}
      </button>
    </div>
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        {isEditing ? 'Edit Appointment' : 'Book an Appointment'}
      </h1>
      
      <div className="bg-white shadow rounded-lg p-6">
        {error && (
          <div className="mb-4 bg-red-50 border-l-4 border-red-400 p-4">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {renderCustomerSelect()}
          <div>
            <label htmlFor="serviceId" className="block text-sm font-medium text-gray-700">
              Service
            </label>
            <select
              id="serviceId"
              name="serviceId"
              required
              value={formData.serviceId}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-barbershop-blue focus:border-barbershop-blue sm:text-sm rounded-md"
            >
              <option value="">Select a service</option>
              {mockServices.map(service => (
                <option key={service.id} value={service.id}>
                  {service.name} - ${service.price} ({service.duration} min)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="barberId" className="block text-sm font-medium text-gray-700">
              Barber
            </label>
            <select
              id="barberId"
              name="barberId"
              required
              value={formData.barberId}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-barbershop-blue focus:border-barbershop-blue sm:text-sm rounded-md"
            >
              <option value="">Select a barber</option>
              {mockBarbers.map(barber => (
                <option key={barber.id} value={barber.id}>
                  {barber.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700">
              Date & Time
            </label>
            <input
              type="datetime-local"
              name="appointmentDate"
              id="appointmentDate"
              required
              min={minDateTime}
              value={formData.appointmentDate}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-barbershop-blue focus:border-barbershop-blue sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
              Special Requests (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-barbershop-blue focus:border-barbershop-blue sm:text-sm"
            />
          </div>

          {renderActionButtons()}
        </form>
      </div>
    </div>
  );
};

export default BookAppointment; 