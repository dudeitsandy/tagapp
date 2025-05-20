import { useAuth } from '../../contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Personal Information</h2>
          <div className="mt-4 grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <div className="mt-1 p-2 bg-gray-50 rounded-md">
                {user?.name}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1 p-2 bg-gray-50 rounded-md">
                {user?.email}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <div className="mt-1 p-2 bg-gray-50 rounded-md">
                {user?.role}
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-500">
            Profile editing functionality coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile; 