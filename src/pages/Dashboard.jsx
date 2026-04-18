import React, { useState } from "react";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBars, faRightFromBracket, faTimes, 
  faShieldHalved, faFolderOpen, faPlus, faChartPie 
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => signOut(auth);

  return (
    <div className="flex h-screen bg-[#020617] overflow-hidden">
      
      {/* --- SIDEBAR DRAWER (MOBILE & DESKTOP) --- */}
      <aside className={`
        fixed inset-y-0 left-0 z-[100] w-72 bg-[#020617] border-r border-white/5 p-8 
        transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="flex justify-between items-center mb-12">
          <span className="text-xl font-black italic uppercase tracking-tighter text-white">
            IRON<span className="text-indigo-500">LOCKER.</span>
          </span>
          <button className="lg:hidden text-slate-500 hover:text-white" onClick={() => setIsSidebarOpen(false)}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>

        <nav className="space-y-2">
          <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-4">Storage</p>
          <button className="w-full flex items-center gap-4 px-4 py-3 bg-indigo-600/10 text-indigo-400 rounded-2xl font-bold text-sm">
            <FontAwesomeIcon icon={faShieldHalved} /> My Vault
          </button>
          <button className="w-full flex items-center gap-4 px-4 py-3 text-slate-500 hover:bg-white/5 hover:text-white rounded-2xl font-bold text-sm transition-all">
            <FontAwesomeIcon icon={faChartPie} /> Analytics
          </button>
          <button className="w-full flex items-center gap-4 px-4 py-3 text-slate-500 hover:bg-white/5 hover:text-white rounded-2xl font-bold text-sm transition-all">
            <FontAwesomeIcon icon={faFolderOpen} /> Folders
          </button>
        </nav>

        <div className="absolute bottom-8 left-8 right-8">
           <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl flex items-center justify-center gap-3 font-black uppercase text-[10px] tracking-widest transition-all shadow-xl shadow-indigo-600/20">
             <FontAwesomeIcon icon={faPlus} /> Upload File
           </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 flex flex-col min-w-0 relative">
        
        {/* DASHBOARD HEADER */}
        <header className="h-24 flex items-center justify-between px-6 md:px-10 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl sticky top-0 z-[90]">
          
          {/* Left: Interactive Profile Avatar */}
          <div className="flex items-center gap-5">
            <div 
              className="relative cursor-pointer active:scale-95 transition-transform"
              onClick={() => setIsSidebarOpen(true)}
            >
              <div className="w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-indigo-500/20 hover:ring-indigo-500 transition-all">
                <img 
                    src={user?.photoURL || "https://ui-avatars.com/api/?name=User"} 
                    alt="profile" 
                    className="w-full h-full object-cover"
                />
              </div>
              {/* Overlapping Hamburger Icon */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center border-2 border-[#020617] text-white text-[10px] shadow-lg">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-1">Welcome back,</span>
              <span className="text-base md:text-lg font-bold text-white leading-none">
                {user?.displayName?.split(" ")[0] || "User"} 👋
              </span>
            </div>
          </div>

          {/* Right: Logout Action */}
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-red-500/10 text-slate-400 hover:text-red-500 rounded-2xl border border-white/5 transition-all font-bold text-xs uppercase tracking-widest group"
          >
            <span className="sm:inline">Logout</span>
            <FontAwesomeIcon icon={faRightFromBracket} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </header>

        {/* --- PAGE CONTENT --- */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
          <div className="max-w-6xl mx-auto">
             <div className="mb-10">
                <h1 className="text-3xl font-black italic uppercase tracking-tighter">Your Vault</h1>
                <p className="text-slate-500 font-medium">Manage your encrypted files and documents.</p>
             </div>
             
             {/* Dashboard Cards / Grid would go here */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="h-40 bg-white/5 border border-white/5 rounded-[2rem] border-dashed flex items-center justify-center text-slate-600 font-bold italic">
                   No files found
                </div>
             </div>
          </div>
        </main>

        {/* MOBILE SIDEBAR OVERLAY */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[95] lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;