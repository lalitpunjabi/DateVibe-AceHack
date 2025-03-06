import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListingPage from './pages/ListingPage';
import VenuePage from './pages/VenuePage';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import BookingForm from './components/booking/BookingForm';
import BookingConfirmation from './components/booking/BookingConfirmation';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/venues" element={<ListingPage />} />
      <Route path="/venue/:id" element={<VenuePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/booking/:venueId" element={<BookingForm />} />
      <Route path="/booking/confirmation" element={<BookingConfirmation />} />
    </Routes>
  );
};

export default AppRoutes; 