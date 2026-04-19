import { createBrowserRouter, Navigate } from "react-router";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

// Layout & Pages
import Main from "../layouts/Main";
import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";

// New Content Pages
import About from "../pages/About";
import Features from "../pages/Features";
import Tutorials from "../pages/Tutorials";
import Contact from "../pages/Contact";

// Protection Wrapper
import PrivateRoutes from "./PrivateRoutes";

/**
 * PublicRoute Logic:
 * ১. প্রথমবার লগইন অবস্থায় ল্যান্ডিং পেজে আসলে অটোমেটিক ড্যাশবোর্ডে রিডাইরেক্ট করবে।
 * ২. এরপর ম্যানুয়ালি ল্যান্ডিং পেজে আসতে চাইলে বাধা দিবে না।
 * ৩. forceRedirect থাকলে (Login/Register) লগইন অবস্থায় একদমই ঢোকা যাবে না।
 */
const PublicRoute = ({ children, forceRedirect = false }) => {
  const { user, loading } = useAuth();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const hasRedirected = sessionStorage.getItem("initialRedirect");

    if (!loading && user && !hasRedirected) {
      sessionStorage.setItem("initialRedirect", "true");
      setShouldRedirect(true);
    }
  }, [user, loading]);

  if (loading) {
    return (
      <div className="h-screen bg-[#020617] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

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
      // Home / Landing
      {
        index: true,
        element: (
          <PublicRoute>
            <Landing />
          </PublicRoute>
        ),
      },
      // Info Pages
      {
        path: "about",
        element: <About />,
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "tutorials",
        element: <Tutorials />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // Auth Pages
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
      // Protected Dashboard
      {
        path: "dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
      },
      // 404 - Not Found
      {
        path: "*",
        element: (
          <div className="h-screen bg-[#020617] flex flex-col items-center justify-center text-white p-6 text-center">
            <h1 className="text-9xl font-black text-indigo-500 opacity-20">404</h1>
            <p className="text-xl font-bold -mt-10 mb-8 uppercase tracking-widest font-['Hind_Siliguri']">
              পেজটি খুঁজে পাওয়া যায়নি
            </p>
            <button 
              onClick={() => window.location.href = "/"}
              className="text-indigo-400 border border-indigo-400 px-8 py-3 rounded-2xl hover:bg-indigo-400 hover:text-white transition-all font-black uppercase text-xs tracking-widest"
            >
              Go Back Home
            </button>
          </div>
        )
      }
    ],
  },
]);