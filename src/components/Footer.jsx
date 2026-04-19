import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] border-t border-white/5 py-8 px-6 font-['Hind_Siliguri']">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Branding */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-indigo-600 rounded flex items-center justify-center text-white">
              <FontAwesomeIcon icon={faShieldHalved} size="xs" />
            </div>
            <span className="text-lg font-black italic tracking-tighter text-white uppercase">
              Iron<span className="text-indigo-500">Locker</span>
            </span>
          </Link>
          <span className="hidden md:block h-4 w-[1px] bg-white/10 mx-2"></span>
          <p className="text-slate-500 text-[11px] font-medium uppercase tracking-wider hidden sm:block">
            Secure Digital Vault
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-6">
          {[
            { icon: faFacebookF, link: "https://facebook.com/emranhossen.dev" },
            { icon: faLinkedinIn, link: "https://linkedin.com/in/emranhossen" },
            { icon: faGithub, link: "https://github.com/emranhossen-dev" },
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.link} 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-500 hover:text-indigo-500 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>

        {/* Right: Copyright & Build Info */}
        <div className="text-right">
          <p className="text-slate-500 text-[10px] font-medium uppercase tracking-widest leading-tight">
            © {currentYear} IronLocker
          </p>
          <p className="text-slate-600 text-[9px] uppercase tracking-[0.2em] mt-1">
            Build by <span className="text-indigo-500/80">Emran Hossen</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;