import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBolt, 
  faCloudArrowUp, 
  faFingerprint, 
  faObjectGroup, 
  faMobileScreenButton,
  faShuffle,
  faFileShield,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  const featureList = [
    {
      title: "অটো-স্মার্ট ক্যাটাগরি",
      icon: faObjectGroup,
      desc: "আপনার আপলোড করা ফাইলগুলো স্বয়ংক্রিয়ভাবে একাডেমিক, প্রফেশনাল বা পার্সোনাল ফোল্ডারে সাজিয়ে রাখে। অগোছালো ড্রাইভের দিন শেষ।",
      color: "text-blue-500"
    },
    {
      title: "সুপারফাস্ট ক্লাউড আপলোড",
      icon: faCloudArrowUp,
      desc: "আমরা ImgBB এর শক্তিশালী API ব্যবহার করি, যা আপনাকে দেয় রকেট গতিতে আপলোড এবং যেকোনো ডিভাইস থেকে ইনস্ট্যান্ট অ্যাক্সেসের সুবিধা।",
      color: "text-indigo-500"
    },
    {
      title: "AES-256 এনক্রিপশন",
      icon: faFingerprint,
      desc: "আপনার ডেটা আমাদের কাছে এনক্রিপ্টেড অবস্থায় থাকে। ব্যাংক-লেভেল সিকিউরিটি নিশ্চিত করে যে আপনার পাসওয়ার্ড ছাড়া ফাইল খোলা অসম্ভব।",
      color: "text-emerald-500"
    },
    {
      title: "ইনস্ট্যান্ট ইমেজ প্রিভিউ",
      icon: faBolt,
      desc: "ফাইল ডাউনলোড না করেই ভল্টের ভেতর থেকে সরাসরি হাই-কোয়ালিটি প্রিভিউ দেখার সুবিধা। সময় বাঁচান, কাজ দ্রুত করুন।",
      color: "text-amber-500"
    },
    {
      title: "ফুললি রেসপনসিভ ভল্ট",
      icon: faMobileScreenButton,
      desc: "আপনার ফোন বা কম্পিউটার—সব ডিভাইসেই IronLocker সমানভাবে কাজ করে। পকেটে রাখুন আপনার ডিজিটাল সিন্দুক।",
      color: "text-rose-500"
    },
    {
      title: "সিকিউর শেয়ারিং",
      icon: faShuffle,
      desc: "প্রয়োজন হলে আপনার ভল্ট থেকে সরাসরি নিরাপদভাবে ফাইল ডাউনলোড বা ভিউ লিঙ্ক জেনারেট করার সুবিধা (শীঘ্রই আসছে)।",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="bg-[#020617] text-white font-['Hind_Siliguri'] py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full -z-10" />
          <h1 className="text-4xl md:text-6xl font-black italic uppercase mb-6 tracking-tighter">
            ভবিষ্যতের <span className="text-indigo-500">প্রযুক্তি</span>, আজকের নিরাপত্তা।
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            IronLocker শুধুমাত্র ফাইল জমা রাখার জায়গা নয়, এটি আপনার ডিজিটাল লাইফস্টাইলকে সহজ করার একটি আধুনিক মাধ্যম।
          </p>
        </div>

        {/* --- FEATURES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {featureList.map((feature, i) => (
            <div 
              key={i} 
              className="group relative bg-slate-900/40 border border-white/5 p-10 rounded-[3rem] transition-all duration-500 hover:bg-indigo-600/[0.03] hover:border-indigo-500/30"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-600/10 transition-all ${feature.color}`}>
                <FontAwesomeIcon icon={feature.icon} size="2xl" />
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed italic text-sm md:text-base">
                {feature.desc}
              </p>

              {/* Decorative Element */}
              <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500/20">
                <FontAwesomeIcon icon={faFileShield} size="3xl" />
              </div>
            </div>
          ))}
        </div>

        {/* --- STATS SECTION (Optional but professional) --- */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[4rem] p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-indigo-600/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <div className="relative z-10 grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-black mb-2 italic">100%</div>
              <div className="text-indigo-100 text-xs font-black uppercase tracking-[0.3em]">Privacy Guaranteed</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2 italic">0.2s</div>
              <div className="text-indigo-100 text-xs font-black uppercase tracking-[0.3em]">Latency Response</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2 italic">Unlimited</div>
              <div className="text-indigo-100 text-xs font-black uppercase tracking-[0.3em]">Encryption Layers</div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl font-bold mb-10 italic">আপনি কি পরবর্তী জেনারেশনের সিকিউরিটি পেতে প্রস্তুত?</h2>
          <Link to="/register" className="inline-flex items-center gap-4 px-12 py-6 bg-white text-indigo-600 rounded-3xl font-black uppercase text-sm tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5">
            অ্যাকাউন্ট খুলুন <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Features;