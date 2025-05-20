import { useAuth } from '../../contexts/AuthContext';

const CustomerDashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Appointments</h1>
      {/* Add appointment list and booking functionality */}
    </div>
  );
};

export default CustomerDashboard; 