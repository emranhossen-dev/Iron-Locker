import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faShieldHalved,
  faTableCellsLarge,
  faFolderOpen,
  faRightFromBracket,
  faUser, // Added for Profile icon
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ 
  isSidebarOpen, 
  setIsSidebarOpen, 
  viewMode, 
  resetDashboard, 
  openFolderGrid, 
  categories, 
  selectFolder, 
  activeFolder, 
  handleLogout,
  setShowProfileModal // New prop passed from Dashboard
}) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-[100] w-72 bg-[#020617] border-r border-white/5 p-8 transition-transform duration-300 lg:translate-x-0 lg:static flex flex-col ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center mb-12">
        <span className="text-xl font-black italic uppercase text-white">
          IRON<span className="text-indigo-500">LOCKER</span>
        </span>
        <button
          className="lg:hidden text-slate-500 hover:text-white transition-colors"
          onClick={() => setIsSidebarOpen(false)}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
      </div>

      <nav className="flex-1 space-y-2 overflow-y-auto custom-scrollbar">
        <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-4">
          Main Menu
        </p>
        <button
          onClick={() => { resetDashboard(); setIsSidebarOpen(false); }}
          className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold text-sm text-left transition-all ${
            viewMode === "all" && !activeFolder
              ? "bg-indigo-600/10 text-indigo-400"
              : "hover:bg-white/5"
          }`}
        >
          <FontAwesomeIcon icon={faShieldHalved} /> Dashboard
        </button>

        <button
          onClick={() => { openFolderGrid(); setIsSidebarOpen(false); }}
          className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold text-sm text-left transition-all ${
            viewMode === "grid" ? "bg-indigo-600/10 text-indigo-400" : "hover:bg-white/5"
          }`}
        >
          <FontAwesomeIcon icon={faTableCellsLarge} /> All Folders
        </button>

        <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mt-8 mb-4">
          Quick Access
        </p>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => { selectFolder(cat); setIsSidebarOpen(false); }}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold text-sm text-left transition-all ${
              activeFolder === cat ? "bg-indigo-600/10 text-indigo-400" : "hover:bg-white/5"
            }`}
          >
            <FontAwesomeIcon icon={faFolderOpen} /> {cat}
          </button>
        ))}
      </nav>

      {/* --- ADDED UPDATE PROFILE SECTION --- */}
      <button
        onClick={() => { setShowProfileModal(true); setIsSidebarOpen(false); }}
        className="mt-4 w-full px-5 py-4 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all border border-white/5"
      >
        <FontAwesomeIcon icon={faUser} className="text-indigo-500" /> Update Profile
      </button>

      <button
        onClick={handleLogout}
        className="mt-3 w-full px-5 py-4 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 transition-all"
      >
        Logout <FontAwesomeIcon icon={faRightFromBracket} />
      </button>
    </aside>
  );
};

export default Sidebar;