import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import DashboardLayout from './layouts/DashboardLayout'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import CustomerDashboard from './pages/dashboard/CustomerDashboard'
import BookAppointment from './pages/dashboard/BookAppointment'
import Profile from './pages/dashboard/Profile'
import Register from './pages/auth/Register'
import { AuthProvider } from './contexts/AuthContext'
import { ProtectedRoute } from './components/ProtectedRoute'
import GuestBooking from './pages/auth/GuestBooking'
import AppointmentConfirmation from './pages/dashboard/AppointmentConfirmation'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="guest-booking" element={<GuestBooking />} />
            
            {/* All dashboard routes are protected and use DashboardLayout */}
            <Route
              path="dashboard/*"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<CustomerDashboard />} />
              <Route path="book" element={<BookAppointment />} />
              <Route path="profile" element={<Profile />} />
              <Route path="appointments/confirm" element={<AppointmentConfirmation />} />
              {/* Fallback for unimplemented features */}
              <Route 
                path="*" 
                element={
                  <div className="text-center py-10">
                    <h2 className="text-xl font-semibold text-gray-600">
                      Feature Coming Soon
                    </h2>
                    <p className="mt-2 text-gray-500">
                      This feature is currently under development.
                    </p>
                  </div>
                } 
              />
            </Route>

            <Route path="*" element={<div>Page not found</div>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
