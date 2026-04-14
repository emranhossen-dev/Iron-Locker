import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = { rootMargin: "-30% 0px -60% 0px" };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const getLinkClass = (id) =>
    `text-[10px] font-black uppercase tracking-[0.2em] transition-all cursor-pointer ${
      activeSection === id ? "text-indigo-400 scale-105" : "text-slate-400 hover:text-white"
    }`;

  return (
    <nav className="h-16 bg-[#020617]/90 backdrop-blur-md border-b border-white/5 flex items-center px-6 sticky top-0 z-[100] font-['Inter']">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-10">
          <a href="#home" className="text-xl font-black italic text-white tracking-tighter">
            IRON<span className="text-indigo-500">LOCKER</span>
          </a>
          <div className="hidden lg:flex items-center gap-6">
            <a href="#home" className={getLinkClass("home")}>Home</a>
            <a href="#features" className={getLinkClass("features")}>Why Choose</a>
            <a href="#preview" className={getLinkClass("preview")}>Interface</a>
            <a href="#how-to-use" className={getLinkClass("how-to-use")}>How to Use</a>
            <a href="#faq" className={getLinkClass("faq")}>FAQ</a>
            <a href="#contact" className={getLinkClass("contact")}>Contact</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {!user ? (
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-xs font-bold text-slate-400 hover:text-white uppercase tracking-widest">Login</Link>
              <Link to="/register" className="btn btn-sm bg-indigo-600 border-none text-white px-6 rounded-xl font-black uppercase text-[10px]">Join Free</Link>
            </div>
          ) : (
            <div className="flex items-center gap-6">
               <Link to="/dashboard" className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">Dashboard</Link>
               <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="avatar cursor-pointer">
                  <div className="w-9 rounded-xl ring-2 ring-indigo-500 ring-offset-2 ring-offset-[#020617]">
                    <img src={user.photoURL || "https://ui-avatars.com/api/?name=User"} alt="profile" />
                  </div>
                </div>
                <ul tabIndex={0} className="dropdown-content mt-4 p-2 shadow-2xl bg-slate-900 border border-white/10 rounded-2xl w-52 text-white">
                  <li><Link to="/profile" className="p-3 block hover:bg-white/5 rounded-xl text-sm font-bold">My Profile</Link></li>
                  <li><button onClick={() => signOut(auth)} className="text-error font-bold p-3 w-full text-left hover:bg-white/5 rounded-xl text-sm">Logout</button></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;