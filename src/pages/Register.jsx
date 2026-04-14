import React from "react";
import { Link } from "react-router";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase.init";

const Register = () => {
  const handleGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).catch(err => console.error(err));
  };

  return (
    <div className="lock-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-900 p-10 rounded-[3rem] border border-white/10 shadow-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-white italic">New Vault</h2>
          <p className="text-slate-500 text-[10px] uppercase tracking-[0.3em] font-black mt-1">Secure Registration</p>
        </div>

        {/* Email Signup Form */}
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="input input-bordered w-full bg-white/5 border-white/10 h-14 rounded-2xl outline-none focus:border-indigo-500 text-white" />
          <input type="email" placeholder="Email Address" className="input input-bordered w-full bg-white/5 border-white/10 h-14 rounded-2xl outline-none focus:border-indigo-500 text-white" />
          <input type="password" placeholder="Key Phrase (Password)" className="input input-bordered w-full bg-white/5 border-white/10 h-14 rounded-2xl outline-none focus:border-indigo-500 text-white" />
          <button type="submit" className="btn btn-primary w-full h-14 rounded-2xl font-black shadow-lg shadow-indigo-600/20 mt-2">Initialize Account</button>
        </form>

        {/* Simple Gap */}
        <div className="h-10"></div>

        {/* Google Signup */}
        <button onClick={handleGoogle} className="btn btn-outline w-full h-14 rounded-2xl gap-4 border-white/10 text-white hover:bg-white/5 hover:border-indigo-500 transition-all">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/pwa/google.svg" className="w-5" alt="G" />
          <span className="font-bold">Continue with Google</span>
        </button>
        
        <p className="mt-8 text-center text-xs text-slate-500 font-bold">
          Already a user? <Link to="/login" className="text-indigo-400 hover:underline uppercase tracking-tighter ml-1">Access Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;