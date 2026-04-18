import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword, 
  updateProfile 
} from "firebase/auth";
import auth from "../firebase.init";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Google Sign In Logic
  const handleGoogle = () => {
    setError("");
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(() => navigate("/dashboard"))
      .catch((err) => setError(err.message));
  };

  // Email/Password Sign Up Logic
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
      // Update the user's display name immediately
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
          <input 
            name="password" 
            type="password" 
            placeholder="Key Phrase (Password)" 
            required 
            className="input input-bordered w-full bg-white/5 border-white/10 h-12 rounded-xl text-white outline-none focus:border-indigo-500 text-sm transition-all" 
          />
          
          <button 
            type="submit" 
            disabled={loading} 
            className="btn btn-primary w-full h-12 rounded-xl font-black uppercase text-xs tracking-widest mt-2 border-none"
          >
            {loading ? <span className="loading loading-spinner loading-xs"></span> : "Initialize Account"}
          </button>
        </form>

        <button 
          onClick={handleGoogle} 
          type="button"
          className="btn btn-outline w-full h-12 rounded-xl gap-3 border-white/10 text-white hover:bg-white/5 mt-3 transition-all"
        >
          <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-4" alt="Google Icon" />
          <span className="font-bold text-xs uppercase tracking-widest">Google Access</span>
        </button>
        
        <p className="mt-6 text-center text-[10px] text-slate-500 font-bold">
          ALREADY A USER? <Link to="/login" className="text-indigo-400 hover:underline ml-1">ACCESS HERE</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;