import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  updateProfile 
} from "firebase/auth";
import auth from "../firebase.init";
// Import Lucide icons for a clean look (or use any icon library you prefer)
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for visibility

  const handleGoogle = () => {
    setError("");
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(() => navigate("/dashboard"))
      .catch((err) => setError(err.message));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      return setError("Key phrase must be at least 6 characters.");
    }

    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(result.user, { displayName: name });
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#020617] font-['Hind_Siliguri']">
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-[2.5rem] border border-white/10 shadow-2xl">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-black text-white italic tracking-tight">New Vault</h2>
          <p className="text-slate-500 text-[10px] uppercase tracking-[0.3em] font-black mt-1">Secure Registration</p>
        </div>

        {error && (
          <p className="text-red-500 text-[11px] text-center mb-4 bg-red-500/10 py-2.5 px-4 rounded-xl border border-red-500/20 font-medium">
            {error}
          </p>
        )}

        <form onSubmit={handleRegister} className="space-y-3">
          <input 
            name="name" 
            type="text" 
            placeholder="Full Name" 
            required 
            className="input input-bordered w-full bg-white/5 border-white/10 h-12 rounded-xl text-white outline-none focus:border-indigo-500 text-sm transition-all" 
          />
          <input 
            name="email" 
            type="email" 
            placeholder="Email Address" 
            required 
            className="input input-bordered w-full bg-white/5 border-white/10 h-12 rounded-xl text-white outline-none focus:border-indigo-500 text-sm transition-all" 
          />
          
          {/* Password Container */}
          <div className="relative">
            <input 
              name="password" 
              type={showPassword ? "text" : "password"} // Dynamic type
              placeholder="Key Phrase (Password)" 
              required 
              className="input input-bordered w-full bg-white/5 border-white/10 h-12 rounded-xl text-white outline-none focus:border-indigo-500 text-sm transition-all pr-12" 
            />
            {/* Toggle Button */}
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
            className="btn btn-primary w-full h-12 rounded-xl font-black uppercase text-xs tracking-widest mt-2 border-none"
          >
            {loading ? <span className="loading loading-spinner loading-xs"></span> : "Create Account"}
          </button>
        </form>

        <button 
          onClick={handleGoogle} 
          type="button"
          className="btn btn-outline w-full h-12 rounded-xl gap-3 border-white/10 text-white hover:bg-white/5 mt-3 transition-all"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png" className="w-4" alt="Google Icon" />
          <span className="font-bold text-xs uppercase tracking-widest">Sign Up With Google</span>
        </button>
        
        <p className="mt-6 text-center text-[10px] text-slate-500 font-bold">
          Already Have an Account? <Link to="/login" className="text-indigo-400 hover:underline ml-1">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
