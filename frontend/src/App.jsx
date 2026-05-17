import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import { ActivitySearch, Admin, Budget, CitySearch, CreateTrip, Dashboard, ForgotPage, ItineraryBuilder, ItineraryView, LoginPage, MyTrips, Notes, Packing, Profile, Shared, SignupPage } from './pages/Pages';
import { Toaster, toast } from 'sonner';
import { useEffect } from 'react';

export default function App(){
  useEffect(()=>toast.success('Welcome to Traveloop ✈️'),[]);
  return <><Toaster richColors position="top-right"/><Routes>
    <Route path="/" element={<Navigate to="/dashboard" replace />} />
    <Route path="/login" element={<LoginPage/>} /><Route path="/signup" element={<SignupPage/>} /><Route path="/forgot-password" element={<ForgotPage/>} />
    <Route element={<AppLayout/>}><Route path="/dashboard" element={<Dashboard/>} /><Route path="/create-trip" element={<CreateTrip/>} /><Route path="/my-trips" element={<MyTrips/>} /><Route path="/itinerary-builder" element={<ItineraryBuilder/>} /><Route path="/itinerary-view" element={<ItineraryView/>} /><Route path="/city-search" element={<CitySearch/>} /><Route path="/activity-search" element={<ActivitySearch/>} /><Route path="/budget" element={<Budget/>} /><Route path="/packing" element={<Packing/>} /><Route path="/shared/:id" element={<Shared/>} /><Route path="/profile" element={<Profile/>} /><Route path="/notes" element={<Notes/>} /><Route path="/admin" element={<Admin/>} /></Route>
  </Routes></>
}
