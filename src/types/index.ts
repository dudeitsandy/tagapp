export type UserRole = 'customer' | 'employee' | 'owner' | 'admin'

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: string;
  lastLogin?: string;
}

export interface Appointment {
  id: string;
  customerId: string;
  barberId: string;
  date: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  businessId: string;
}

export interface Employee extends User {
  role: 'employee';
  phone: string;
  locationId: string;
  services: string[];
}

// Add these back - they're needed by AuthContext and GuestBooking
export interface AuthResponse {
  user: User;
  token: string;
}

export interface RegistrationData {
  name: string;
  email: string;
  password: string;
  phone?: string;
  isGuest?: boolean;
}

export interface GuestBookingData {
  name: string;
  email: string;
  phone?: string;
  appointmentDate: string;
  serviceId: string;
  barberId: string;
}