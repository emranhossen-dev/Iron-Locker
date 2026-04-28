import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider 
} from "firebase/auth";
import auth from "../firebase.init";
// Using Lucide icons for the toggle (or your preferred icon set)
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Toggle state

  const from = location.state?.from?.pathname || "/dashboard";

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError("Authorization failed. Check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    setError("");
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(() => navigate(from, { replace: true }))
      .catch((err) => setError(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] p-6 font-['Hind_Siliguri']">
      <div className="w-full max-w-4xl min-h-[450px] grid md:grid-cols-2 bg-slate-900 rounded-[2.5rem] border border-white/10 shadow-3xl overflow-hidden">
        
        {/* Left Section: Visual Branding */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-indigo-600/5 border-r border-white/5 relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 blur-3xl rounded-full -mr-10 -mt-10"></div>
          <h2 className="text-3xl font-black italic text-white leading-tight relative z-10">
            Access Your<br/><span className="text-indigo-500">Secure Vault.</span>
          </h2>
          <p className="text-slate-500 text-xs mt-3 italic font-medium relative z-10">
            Authentication Required for IronLocker Protocol.
          </p>
          <div className="mt-8 px-4 py-2 bg-white/5 border border-white/5 rounded-lg w-fit">
            <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest">Security: AES-256</span>
          </div>
        </div>

        {/* Right Section: Form Inputs */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tighter">Sign In</h3>
          
          {error && (
            <p className="text-red-500 text-[10px] bg-red-500/10 p-2.5 rounded-lg mb-5 text-center border border-red-500/10 font-bold">
              {error}
            </p>
          )}

          <form onSubmit={handleEmailLogin} className="space-y-3">
            <input 
              name="email" 
              type="email" 
              placeholder="Email Address" 
              required 
              className="input input-bordered w-full bg-white/5 border-white/10 h-12 rounded-xl text-white text-sm focus:border-indigo-500 outline-none transition-all" 
            />
            
            {/* Password Input Wrapper */}
            <div className="relative">
              <input 
                name="password" 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                required 
                className="input input-bordered w-full bg-white/5 border-white/10 h-12 rounded-xl text-white text-sm focus:border-indigo-500 outline-none transition-all pr-12" 
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button 
              type="submit"
              disabled={loading} 
              className="btn btn-primary w-full h-12 rounded-xl font-black uppercase text-xs tracking-widest border-none shadow-lg shadow-indigo-600/10 mt-2"
            >
              {loading ? <span className="loading loading-spinner loading-xs"></span> : "Login"}
            </button>
          </form>

          <button 
            onClick={handleGoogle} 
            type="button"
            className="btn btn-outline w-full h-12 rounded-xl gap-3 border-white/10 text-white hover:bg-white/5 mt-3 transition-all"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png" className="w-4" alt="Google Icon" />
            <span className="font-bold text-xs uppercase tracking-widest">Sign In With Google</span>
          </button>

          <p className="mt-8 text-center text-[10px] text-slate-500 font-bold uppercase tracking-wide">
            Dont Have an Account? <Link to="/register" className="text-indigo-400 hover:underline ml-1">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
