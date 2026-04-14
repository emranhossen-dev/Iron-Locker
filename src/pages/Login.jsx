import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="screen-height-minus-nav flex items-center justify-center bg-[#020617] p-6">
      <div className="w-full max-w-4xl h-[500px] grid md:grid-cols-2 bg-slate-900 rounded-[3rem] border border-white/10 shadow-3xl overflow-hidden">
        <div className="hidden md:flex flex-col justify-center p-12 bg-indigo-600/10 border-r border-white/5">
          <h2 className="text-4xl font-black italic text-white leading-tight">Access Your<br/><span className="text-indigo-500">Secure Vault.</span></h2>
          <p className="text-slate-500 text-sm mt-4">Welcome back to the IronLocker Protocol.</p>
        </div>
        <div className="p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-white mb-6">Sign In</h3>
          <form className="space-y-4">
            <input type="email" placeholder="Email Address" className="input input-bordered w-full bg-white/5 border-white/10 h-14 rounded-2xl text-white" />
            <input type="password" placeholder="Password" className="input input-bordered w-full bg-white/5 border-white/10 h-14 rounded-2xl text-white" />
            <button className="btn btn-primary w-full h-14 rounded-2xl font-bold shadow-lg shadow-indigo-600/20">Login</button>
          </form>
          <p className="mt-6 text-center text-xs text-slate-500">
            Don't have a vault? <Link to="/register" className="text-indigo-400 font-bold hover:underline">Register Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;