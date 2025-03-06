export interface Venue {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  images: string[];
  rating: number;
  reviews: number;
  location: string;
  mapLink: string;
  phone: string;
  email: string;
  averagePrice: number;
  servesAlcohol: boolean;
  openingHours: string;
  dietaryOptions: {
    veg: boolean;
    nonVeg: boolean;
    vegan: boolean;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  createdAt: string;
}

export interface Booking {
  id: string;
  userId: string;
  venueId: string;
  bookingDate: string;
  numberOfGuests: number;
  specialRequests?: string;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  age: number;
  date: string;
  time: string;
  numberOfGuests: number;
  specialRequests?: string;
}