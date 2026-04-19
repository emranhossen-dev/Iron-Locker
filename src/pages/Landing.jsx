import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faShieldHalved, 
  faBolt, 
  faFileShield, 
  faEnvelopeOpenText,
  faCircleCheck,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  return (
    <div className="bg-[#020617] text-white font-['Hind_Siliguri',_sans-serif]">
      
      {/* --- HERO / BANNER SECTION --- */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-indigo-600/20 blur-[120px] rounded-full" />
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/5 border border-indigo-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400">Next-Gen Security</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.3] md:leading-[1.2] tracking-tight mb-8">
            Gmail-এ লগইন আর লিংক শেয়ারের দিন শেষ, <br className="hidden md:block"/>
            <span className="text-indigo-500 italic">IronLocker</span>-এই নিরাপদ বাংলাদেশ।
          </h1>

          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-medium px-4">
            আপনার অতি গোপনীয় ফাইলগুলো এখন আর ইমেইলের ড্রাফটে পড়ে থাকবে না। 
            মিলিটারি-গ্রেড এনক্রিপশনে সুরক্ষিত করুন আপনার ডিজিটাল জীবন।
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Link to="/register" className="w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold uppercase text-sm tracking-widest transition-all shadow-2xl shadow-indigo-600/30 hover:-translate-y-1 active:scale-95">
              এখনই ভল্ট তৈরি করুন
            </Link>
            <Link to="/tutorials" className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold uppercase text-sm tracking-widest transition-all">
              কিভাবে ব্যবহার করবেন?
            </Link>
          </div>
        </div>
      </section>

      {/* --- EXPLORE / CENTERED CARDS --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">সবকিছু এক নজরে</h2>
          <p className="text-slate-500 font-medium">IronLocker প্ল্যাটফর্মের বিস্তারিত সেকশনগুলো ঘুরে দেখুন</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {[
            { title: "আমাদের লক্ষ্য", icon: faShieldHalved, desc: "ডেটা প্রাইভেসি নিয়ে আমাদের দীর্ঘমেয়াদী পরিকল্পনা এবং কেন আমরা আপনার ফাইলের সুরক্ষা নিশ্চিত করি।", link: "/about", btn: "বিস্তারিত দেখুন" },
            { title: "সেরা ফিচারসমূহ", icon: faBolt, desc: "অটো-এনক্রিপশন, স্মার্ট ক্যাটাগরি এবং ক্লাউড সিঙ্ক—যা আপনার ফাইল ম্যানেজমেন্টকে করবে দ্রুত ও সহজ।", link: "/features", btn: "ফিচার লিস্ট" },
            { title: "টিউটোরিয়াল", icon: faFileShield, desc: "সাইন-আপ থেকে ফাইল আপলোড পর্যন্ত প্রতিটি ধাপের ভিডিও ও টেক্সট গাইড এখানে পাবেন।", link: "/tutorials", btn: "গাইড দেখুন" },
            { title: "যোগাযোগ করুন", icon: faEnvelopeOpenText, desc: "কোনো টেকনিক্যাল সমস্যা বা পরামর্শ থাকলে আমাদের সাপোর্ট টিমের সাথে সরাসরি যোগাযোগ করুন।", link: "/contact", btn: "সাপোর্ট মেসেজ" }
          ].map((card, i) => (
            <div key={i} className="group bg-slate-900/40 border border-white/5 p-8 rounded-[2.5rem] flex flex-col items-center text-center transition-all hover:bg-indigo-600/5 hover:border-indigo-500/40">
              <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={card.icon} size="2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1 italic">
                {card.desc}
              </p>
              <Link to={card.link} className="w-full py-4 bg-white/5 group-hover:bg-indigo-600 text-white rounded-xl font-bold uppercase text-xs tracking-widest transition-all flex items-center justify-center gap-2">
                {card.btn} <FontAwesomeIcon icon={faChevronRight} className="text-[10px]" />
              </Link>
            </div>
          ))}

        </div>
      </section>

      {/* --- REFINED CTA SECTION --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-slate-900 border border-white/10 rounded-[3rem] p-10 md:p-20 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-black italic uppercase leading-none mb-8">
                  নিরাপদ আগামীর <br /> যাত্রা শুরু হোক।
                </h2>
                <ul className="space-y-4 mb-10 inline-block lg:block text-left">
                  {[
                    "ফ্রি ৫ জিবি ক্লাউড স্টোরেজ",
                    "AES-256 মিলিটারি গ্রেড নিরাপত্তা",
                    "বাংলাদেশী ইউজারদের ডেটা লোকাল সাপোর্ট"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-400 font-medium text-sm md:text-base">
                      <FontAwesomeIcon icon={faCircleCheck} className="text-indigo-500 flex-shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
                <Link to="/register" className="w-full lg:w-auto inline-flex items-center justify-center px-12 py-5 bg-white text-indigo-600 rounded-2xl font-black uppercase text-sm tracking-[0.2em] shadow-xl hover:bg-slate-100 transition-all">
                  Get Started Free
                </Link>
              </div>
              
              <div className="hidden lg:flex justify-end relative">
                <div className="w-80 h-80 bg-indigo-500/5 rounded-full border border-indigo-500/10 flex items-center justify-center relative">
                   <div className="absolute inset-0 animate-ping rounded-full bg-indigo-500/5"></div>
                   <FontAwesomeIcon icon={faShieldHalved} className="text-[140px] text-indigo-500/20 relative z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;