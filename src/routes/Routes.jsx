import { createBrowserRouter, Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import Main from "../layouts/Main";
import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HowToUse from "../pages/HowToUse";
import PrivateRoutes from "./PrivateRoutes";

/**
 * Guest-Only Wrapper: 
 * Redirects logged-in users AWAY from Landing/Login to the Dashboard.
 */
const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null; // Let the global spinner handle this
  
  return user ? <Navigate to="/dashboard" replace /> : children;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: (
          <PublicRoute>
            <Landing />
          </PublicRoute>
        ),
      },
      {
        path: "how-to-use",
        element: <HowToUse />, // Publicly accessible to everyone
      },
      {
        path: "login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "register",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);