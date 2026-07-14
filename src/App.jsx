import Navbar from "./components/common/Navbar";
import HeroSection from "./components/home/HeroSection";
import StatsCounter from "./components/home/StatsCounter";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/admin/AdminLayout";
import AdminOverview from "./pages/AdminOverview";
import AdminProperties from "./pages/AdminProperties";
import AdminInquiries from "./pages/AdminInquiries";
import AdminBookings from "./pages/AdminBookings";
import AdminUsers from "./pages/AdminUsers";

function App() {
  return (
    <>


      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin" replace />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminOverview />} />
          <Route path="properties" element={<AdminProperties />} />
          <Route path="inquiries" element={<AdminInquiries />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="users" element={<AdminUsers />} />
        </Route>
      </Routes>
    </BrowserRouter>
      <Navbar />
      <HeroSection />
      <StatsCounter />
    </>
  );
}

export default App;
