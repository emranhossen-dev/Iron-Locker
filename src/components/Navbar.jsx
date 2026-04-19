import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router"; 
import { signOut } from "firebase/auth";
import auth from "../firebase.init";
import { useAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBars, faTimes, faArrowRightFromBracket, 
  faTableCells, faShieldHalved, faCircleInfo,
  faLightbulb, faGraduationCap, faEnvelope 
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    setIsMenuOpen(false);
    navigate("/");
  };

  const navLinks = [
    { path: "/", label: "Home", icon: faShieldHalved },
    { path: "/about", label: "About", icon: faCircleInfo },
    { path: "/features", label: "Features", icon: faLightbulb },
    { path: "/tutorials", label: "Tutorials", icon: faGraduationCap },
    { path: "/contact", label: "Contact", icon: faEnvelope },
  ];

  const linkStyles = ({ isActive }) => 
    `text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
      isActive ? "text-indigo-400" : "text-slate-400 hover:text-white"
    }`;

  return (
    <>
      <nav className="h-20 bg-[#020617]/90 backdrop-blur-xl border-b border-white/5 flex items-center px-6 sticky top-0 z-[100]">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
          
          {/* LEFT: LOGO & MOBILE TOGGLE */}
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(true)} className="lg:hidden text-slate-400 hover:text-white">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </button>
            
            {/* Added Logo Structure Here */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-600/20">
                <FontAwesomeIcon icon={faShieldHalved} size="sm" />
              </div>
              <span className="text-xl font-black italic tracking-tighter text-white uppercase">
                Iron<span className="text-indigo-500">Locker</span>
              </span>
            </Link>
          </div>

          {/* CENTER: DESKTOP NAV ITEMS */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkStyles}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* RIGHT: AUTH STATE */}
          <div className="flex items-center gap-4">
            {!user ? (
              <Link to="/register" className="btn btn-sm h-11 bg-indigo-600 border-none text-white px-6 rounded-xl font-black uppercase text-[10px] tracking-widest shadow-lg shadow-indigo-500/20 transition-transform active:scale-95">
                Join Free
              </Link>
            ) : (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="avatar cursor-pointer">
                  <div className="w-10 rounded-2xl ring-2 ring-indigo-500/30 ring-offset-2 ring-offset-[#020617]">
                    <img src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName || 'User'}&background=4f46e5&color=fff`} alt="profile" />
                  </div>
                </div>
                <ul tabIndex={0} className="dropdown-content mt-4 p-2 shadow-2xl bg-slate-900 border border-white/10 rounded-2xl w-56 text-white overflow-hidden">
                  <li className="px-4 py-3 border-b border-white/5 mb-1">
                    <p className="text-[8px] text-indigo-500 font-bold uppercase">Logged in as</p>
                    <p className="text-xs font-bold truncate">{user.displayName || "Member"}</p>
                  </li>
                  <li><Link to="/dashboard" className="p-3 flex items-center gap-3 hover:bg-white/5 rounded-xl text-xs font-bold transition-all"><FontAwesomeIcon icon={faTableCells} className="text-indigo-500" /> Dashboard</Link></li>
                  <li><button onClick={handleLogout} className="text-red-400 font-bold p-3 w-full text-left hover:bg-red-500/10 rounded-xl text-xs flex items-center gap-3 mt-1"><FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout</button></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER MENU */}
      <div className={`fixed inset-0 z-[110] transition-all ${isMenuOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMenuOpen(false)} />
        <aside className={`absolute inset-y-0 left-0 w-72 bg-[#020617] border-r border-white/10 p-8 flex flex-col transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center mb-12">
            {/* Logo in Mobile Menu as well */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white">
                <FontAwesomeIcon icon={faShieldHalved} size="xs" />
              </div>
              <span className="text-sm font-black italic uppercase text-white">IronLocker</span>
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="text-slate-500 hover:text-white transition-colors"><FontAwesomeIcon icon={faTimes} size="lg" /></button>
          </div>
          <nav className="flex-1 space-y-4">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className={({isActive}) => `flex items-center gap-4 text-sm font-bold tracking-widest uppercase transition-all ${isActive ? 'text-indigo-400' : 'text-slate-500'}`}>
                <FontAwesomeIcon icon={link.icon} className="w-5" /> {link.label}
              </NavLink>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Navbar;