import React from "react";
import { Link } from "react-router";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <div className="navbar bg-white/5 backdrop-blur-md px-10 border-b border-white/5 sticky top-0 z-50">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-black text-white italic">
          Docs<span className="text-indigo-500">Vault</span>
        </Link>
      </div>
      <div className="flex-none gap-4">
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-sm hidden md:block">{user.displayName}</span>
            <button onClick={() => signOut(auth)} className="btn btn-sm btn-outline btn-error">Logout</button>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-indigo-500">
                <img src={user.photoURL} alt="user" />
              </div>
            </div>
          </div>
        ) : (
          <button className="btn btn-sm bg-white text-black border-none hover:bg-slate-200">Sign In</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;