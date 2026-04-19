import { createBrowserRouter, Navigate, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Main from "../layouts/Main";
import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HowToUse from "../pages/HowToUse";
import PrivateRoutes from "./PrivateRoutes";

/**
 * Updated PublicRoute:
 * 1. Redirects logged-in users to Dashboard ONLY on initial arrival.
 * 2. Allows logged-in users to view the Landing/Login pages if they navigate there manually.
 */
const PublicRoute = ({ children, forceRedirect = false }) => {
  const { user, loading } = useAuth();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    // Check if we have already performed the "First Arrival" redirect in this session
    const hasRedirected = sessionStorage.getItem("initialRedirect");

    if (!loading && user && !hasRedirected) {
      sessionStorage.setItem("initialRedirect", "true");
      setShouldRedirect(true);
    }
  }, [user, loading]);

  if (loading) return null;

  // 'forceRedirect' is used for Login/Register pages where we NEVER want a logged-in user to go.
  // The Landing page (index) will now allow them to stay if they already arrived once.
  if (shouldRedirect || (user && forceRedirect)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
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
        element: <HowToUse />, 
      },
      {
        path: "login",
        element: (
          <PublicRoute forceRedirect={true}>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "register",
        element: (
          <PublicRoute forceRedirect={true}>
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