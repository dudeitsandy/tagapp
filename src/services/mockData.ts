import type { Service, Employee } from '../types';

// Mock Services
export const mockServices: Service[] = [
  {
    id: 'service1',
    name: 'Classic Haircut',
    description: 'Traditional haircut with clippers and scissors',
    duration: 30,
    price: 30,
    businessId: 'business1'
  },
  {
    id: 'service2',
    name: 'Beard Trim',
    description: 'Professional beard trimming and shaping',
    duration: 20,
    price: 20,
    businessId: 'business1'
  }
];

// Mock Barbers
export const mockBarbers: Employee[] = [
  {
    id: 'barber1',
    name: 'John Smith',
    email: 'john@tagbarbershop.com',
    role: 'employee',
    phone: '555-0101',
    locationId: 'location1',
    services: ['service1', 'service2'],
    createdAt: new Date().toISOString()
  }
];

// Generate mock appointments (past and future)
export const generateMockAppointments = (userId: string): Appointment[] => {
  const now = new Date();
  const appointments: Appointment[] = [];

  // Past appointments
  for (let i = 1; i <= 5; i++) {
    const pastDate = new Date(now);
    pastDate.setDate(pastDate.getDate() - i * 3);
    
    appointments.push({
      id: `past-appointment-${i}`,
      customerId: userId,
      barberId: i % 2 === 0 ? 'barber1' : 'barber2',
      date: pastDate.toISOString(),
      status: 'completed'
    });
  }

  // Future appointments
  for (let i = 1; i <= 3; i++) {
    const futureDate = new Date(now);
    futureDate.setDate(futureDate.getDate() + i * 2);
    
    appointments.push({
      id: `future-appointment-${i}`,
      customerId: userId,
      barberId: i % 2 === 0 ? 'barber2' : 'barber1',
      date: futureDate.toISOString(),
      status: 'scheduled'
    });
  }

  return appointments;
}; 