import { createBrowserRouter } from "react-router"; // Using 'react-router' specifically
import Main from "../layouts/Main";
import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);