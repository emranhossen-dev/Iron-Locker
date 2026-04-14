import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

const useAuth = () => {
  const context = useContext(AuthContext);
  
  // Safety check: If context is null, it means AuthProvider isn't wrapping the app
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider. Check your main.jsx!");
  }
  
  return context;
};

export default useAuth;
