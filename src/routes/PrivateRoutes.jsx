import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-screen bg-[#020617] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-indigo-500"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  // Save the current location so we can redirect back after login
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;