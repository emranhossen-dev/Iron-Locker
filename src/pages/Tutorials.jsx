import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPlayCircle, 
  faCircleCheck, 
  faUserPlus, 
  faCloudArrowUp, 
  faFolderOpen, 
  faShieldHalved,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

const Tutorials = () => {
  const steps = [
    {
      title: "অ্যাকাউন্ট তৈরি করুন",
      icon: faUserPlus,
      desc: "প্রথমে 'Register' বাটনে ক্লিক করে আপনার নাম, ইমেইল এবং একটি শক্তিশালী পাসওয়ার্ড দিয়ে অ্যাকাউন্ট তৈরি করে নিন।",
      btnText: "রেজিস্টার করুন",
      link: "/register"
    },
    {
      title: "ড্যাশবোর্ডে প্রবেশ",
      icon: faShieldHalved,
      desc: "লগইন করার পর আপনি আপনার পার্সোনাল ভল্ট বা ড্যাশবোর্ড দেখতে পাবেন। এখান থেকেই সব ফাইল নিয়ন্ত্রণ করা যাবে।",
      btnText: "ড্যাশবোর্ড দেখুন",
      link: "/dashboard"
    },
    {
      title: "নতুন ফাইল আপলোড",
      icon: faCloudArrowUp,
      desc: "'New Asset' বাটনে ক্লিক করুন। ফাইলের একটি নাম দিন এবং সঠিক ক্যাটাগরি (যেমন: Academic বা Personal) সিলেক্ট করুন।",
    },
    {
      title: "নিরাপদভাবে সংরক্ষণ",
      icon: faFolderOpen,
      desc: "সবশেষে আপনার ফাইলটি সিলেক্ট করে 'Secure Asset' বাটনে ক্লিক করলেই সেটি এনক্রিপ্টেড অবস্থায় ভল্টে সেভ হয়ে যাবে।",
    }
  ];

  return (
    <div className="bg-[#020617] text-white font-['Hind_Siliguri'] py-20 px-6 min-h-screen overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-indigo-600/10 blur-[120px] rounded-full -z-10" />
          <h1 className="text-4xl md:text-6xl font-black italic uppercase mb-6 tracking-tighter">
            কিভাবে <span className="text-indigo-500">ব্যবহার</span> করবেন?
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            IronLocker ব্যবহার করা অত্যন্ত সহজ। আপনার ডিজিটাল লাইফ সুরক্ষিত করতে নিচের ধাপগুলো অনুসরণ করুন।
          </p>
        </div>

        {/* --- VIDEO PLACEHOLDER --- */}
        <div className="relative group mb-32">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[3rem] blur opacity-10 group-hover:opacity-25 transition duration-1000"></div>
          <div className="relative bg-slate-900 border border-white/10 rounded-[3rem] overflow-hidden aspect-video flex flex-col items-center justify-center p-10 text-center">
            <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mb-6 cursor-pointer hover:scale-110 transition-transform shadow-2xl shadow-indigo-600/40">
              <FontAwesomeIcon icon={faPlayCircle} size="3xl" />
            </div>
            <h2 className="text-2xl font-bold italic mb-2 uppercase">ভিডিও টিউটোরিয়াল</h2>
            <p className="text-slate-500 text-sm tracking-widest uppercase font-black">Coming Soon / শীঘ্রই আসছে</p>
          </div>
        </div>

        {/* --- STEP BY STEP --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6 p-8 bg-white/5 border border-white/5 rounded-[2.5rem] hover:border-indigo-500/30 transition-all group">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-indigo-600/10 rounded-2xl flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <FontAwesomeIcon icon={step.icon} size="xl" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-black text-indigo-500 uppercase tracking-widest bg-indigo-500/10 px-2 py-1 rounded-md">Step 0{i + 1}</span>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed italic mb-6">
                  {step.desc}
                </p>
                {step.link && (
                  <Link to={step.link} className="text-xs font-black uppercase tracking-widest text-indigo-400 hover:text-white flex items-center gap-2 transition-all">
                    {step.btnText} <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* --- TIPS SECTION --- */}
        <div className="mt-32 p-10 md:p-16 bg-indigo-600/5 border border-indigo-500/10 rounded-[3.5rem]">
          <h2 className="text-2xl font-black italic uppercase mb-10 flex items-center gap-4">
            <span className="w-10 h-1 bg-indigo-500"></span> প্রো টিপস
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "আপনার মাস্টার পাসওয়ার্ডটি কোথাও লিখে রাখবেন না, এটি সবসময় মনে রাখার চেষ্টা করুন।",
              "ফাইল আপলোড করার সময় সঠিক ক্যাটাগরি সিলেক্ট করুন যাতে ভবিষ্যতে সহজে খুঁজে পান।",
              "সার্টিফিকেট বা এনআইডি-র ক্ষেত্রে হাই-কোয়ালিটি স্ক্যান কপি আপলোড করা ভালো।",
              "আপনার অ্যাকাউন্টটি লগইন করার পর কাজ শেষ হলে অবশ্যই 'Logout' করতে ভুলবেন না।"
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-4 text-slate-400">
                <FontAwesomeIcon icon={faCircleCheck} className="text-indigo-500 mt-1" />
                <p className="text-sm font-medium">{tip}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Tutorials;