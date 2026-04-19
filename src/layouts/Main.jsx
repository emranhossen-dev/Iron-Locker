import React from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  const location = useLocation();
  
  // Hide Nav and Footer for any route starting with /dashboard
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen flex flex-col bg-[#020617]">
      {/* Hide Navbar in Dashboard */}
      {!isDashboard && <Navbar />}

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Hide Footer in Dashboard */}
      {!isDashboard && <Footer />}
    </div>
  );
};

export default Main;