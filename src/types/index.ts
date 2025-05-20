export type UserRole = 'customer' | 'employee' | 'owner' | 'admin'

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: string;
  lastLogin?: string;
}

export interface Customer extends User {
  role: 'customer';
  phone?: string;
  preferredLocation?: string;
  appointments?: Appointment[];
}

export interface Employee extends User {
  role: 'employee';
  phone: string;
  locationId: string;
  schedule?: Schedule;
  services: string[]; // IDs of services they can perform
}

export interface Owner extends User {
  role: 'owner';
  businesses: Business[];
  phone: string;
}

export interface Admin extends User {
  role: 'admin';
}

export interface Business {
  id: string;
  name: string;
  locations: Location[];
  employees: Employee[];
  services: Service[];
  ownerId: string;
}

export interface Schedule {
  id: string;
  employeeId: string;
  weeklyHours: WeeklyHours;
  timeOff: TimeOff[];
}

export interface WeeklyHours {
  monday: DayHours;
  tuesday: DayHours;
  wednesday: DayHours;
  thursday: DayHours;
  friday: DayHours;
  saturday: DayHours;
  sunday: DayHours;
}

export interface DayHours {
  start: string; // "HH:mm"
  end: string;   // "HH:mm"
  breaks?: Break[];
}

export interface Break {
  start: string; // "HH:mm"
  end: string;   // "HH:mm"
}

export interface TimeOff {
  start: Date;
  end: Date;
  type: 'vacation' | 'sick' | 'personal';
  approved: boolean;
}

export interface Appointment {
  id: string;
  customerId: string;
  barberId: string;
  date: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  businessId: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  price: number;
  businessId: string;
}

export interface AuthResponse {
  user: User;
  token: string;
} 