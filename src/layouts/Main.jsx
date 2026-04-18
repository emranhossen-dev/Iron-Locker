import React from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";

const Main = () => {
  const location = useLocation();
  
  // Check if we are in the dashboard area
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <div className="bg-[#020617] min-h-screen font-['Hind_Siliguri']">
      {/* Show the main Marketing Navbar only if NOT on dashboard */}
      {!isDashboard && <Navbar />}
      
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Main;