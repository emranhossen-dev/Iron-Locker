import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div className="bg-[#020617] min-h-screen">
      <Navbar />
      {/* No flex-col here to prevent weird stretching, just normal flow */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Main;