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
import EmployeeDashboard from './pages/dashboard/EmployeeDashboard'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            
            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            />
            <Route path="register" element={<Register />} />
            <Route path="guest-booking" element={<GuestBooking />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
