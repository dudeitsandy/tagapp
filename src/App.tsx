import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import DashboardLayout from './layouts/DashboardLayout'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import CustomerDashboard from './pages/dashboard/CustomerDashboard'
import BookAppointment from './pages/dashboard/BookAppointment'
import Profile from './pages/dashboard/Profile'
import { AuthProvider } from './contexts/AuthContext'
import { ProtectedRoute } from './components/ProtectedRoute'

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
            >
              <Route index element={<CustomerDashboard />} />
              <Route path="book" element={<BookAppointment />} />
              <Route path="profile" element={<Profile />} />
              {/* Add more role-specific routes as needed */}
            </Route>

            <Route path="*" element={<div>Page not found</div>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
