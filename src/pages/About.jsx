import React, { useState } from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faShieldHalved, 
  faLock, 
  faUserShield, 
  faChevronDown, 
  faChevronUp, 
  faCircleQuestion,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      question: "IronLocker কি আসলেই নিরাপদ?",
      answer: "হ্যাঁ, আমরা AES-256 মিলিটারি-গ্রেড এনক্রিপশন ব্যবহার করি। আপনার ফাইলগুলো আপলোড হওয়ার আগেই এনক্রিপ্ট করা হয়, ফলে আমরা নিজেও আপনার ফাইল দেখতে পারি না। এমনকি আমাদের ডাটাবেস হ্যাক হলেও আপনার ফাইল কেউ পড়তে পারবে না।"
    },
    {
      question: "আমি কি বিনামূল্যে ব্যবহার করতে পারব?",
      answer: "অবশ্যই! প্রত্যেক নতুন ইউজার ৫ জিবি পর্যন্ত ফ্রি ক্লাউড স্টোরেজ পাবেন। কোনো হিডেন চার্জ ছাড়াই আপনি আপনার জরুরি ডকুমেন্ট সেভ করতে পারবেন।"
    },
    {
      question: "পাসওয়ার্ড ভুলে গেলে কি হবে?",
      answer: "নিরাপত্তার স্বার্থে আমরা পাসওয়ার্ড রিকভারি খুব কড়াকড়িভাবে নিয়ন্ত্রণ করি। তবে আপনার রেজিস্টার্ড ইমেইলের মাধ্যমে অ্যাকাউন্টটি পুনরায় ফিরে পেতে পারেন। আমরা রিকমেন্ড করি একটি শক্তিশালী মাস্টার পাসওয়ার্ড ব্যবহার করার।"
    },
    {
      question: "কি ধরনের ফাইল সেভ করা যাবে?",
      answer: "বর্তমানে আমরা ছবি (JPG, PNG, WEBP) এবং পিডিএফ ফরম্যাটের সব ধরণের জরুরি ডকুমেন্ট যেমন— সার্টিফিকেট, এনআইডি, পাসপোর্ট বা প্রফেশনাল ডাটা সাপোর্ট করি।"
    }
  ];

  return (
    <div className="bg-[#020617] text-white font-['Hind_Siliguri'] overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 px-6 text-center border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black italic uppercase leading-none mb-8">
            আমাদের <span className="text-indigo-500">মিশন</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
            আমরা চাই বাংলাদেশের প্রতিটি মানুষের ডিজিটাল সম্পদ হোক সুরক্ষিত। 
            ইমেইল বা সোশ্যাল মিডিয়ার ইনবক্সে ফাইল রাখা আর নয়— IronLocker আপনার ব্যক্তিগত নিরাপদ ভল্ট।
          </p>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-slate-900/40 border border-white/5 p-12 rounded-[3rem] hover:border-indigo-500 transition-all">
            <FontAwesomeIcon icon={faLock} className="text-4xl text-indigo-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4">গোপনীয়তা</h3>
            <p className="text-slate-500 italic leading-relaxed">
              আপনার ফাইল শুধুমাত্র আপনার। আমরা জিরো-নলেজ আর্কিটেকচার ব্যবহার করি, যাতে আপনার ডেটা কেবল আপনিই দেখতে পারেন।
            </p>
          </div>
          <div className="bg-slate-900/40 border border-white/5 p-12 rounded-[3rem] hover:border-indigo-500 transition-all">
            <FontAwesomeIcon icon={faUserShield} className="text-4xl text-indigo-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4">সুরক্ষা</h3>
            <p className="text-slate-500 italic leading-relaxed">
              মিলিটারি-গ্রেড সিকিউরিটি প্রোটোকল নিশ্চিত করে যে আপনার সংবেদনশীল তথ্য যেকোনো ধরনের সাইবার অ্যাটাক থেকে নিরাপদ।
            </p>
          </div>
          <div className="bg-slate-900/40 border border-white/5 p-12 rounded-[3rem] hover:border-indigo-500 transition-all">
            <FontAwesomeIcon icon={faShieldHalved} className="text-4xl text-indigo-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4">লোকাল ট্রাস্ট</h3>
            <p className="text-slate-500 italic leading-relaxed">
              বাংলাদেশী ডেভেলপার দ্বারা তৈরি এই প্ল্যাটফর্মটি স্থানীয় ইউজারদের প্রয়োজনের কথা মাথায় রেখে ডিজাইন করা হয়েছে।
            </p>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="w-16 h-16 bg-indigo-600/10 rounded-2xl flex items-center justify-center text-indigo-500 mb-6">
               <FontAwesomeIcon icon={faCircleQuestion} size="2xl" />
            </div>
            <h2 className="text-4xl font-black uppercase italic italic">সাধারণ জিজ্ঞাসা (FAQ)</h2>
            <p className="text-slate-500 mt-4 font-medium">আপনার মনে থাকা প্রশ্নগুলোর উত্তর এখানে পাবেন</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="group bg-[#0f172a] border border-white/5 rounded-3xl overflow-hidden transition-all hover:border-indigo-500/50"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-8 flex justify-between items-center text-left"
                >
                  <span className="text-lg font-bold text-slate-200">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeFaq === i ? 'bg-indigo-600 text-white' : 'bg-white/5 text-slate-500'}`}>
                    <FontAwesomeIcon icon={activeFaq === i ? faChevronUp : faChevronDown} />
                  </div>
                </button>
                
                {activeFaq === i && (
                  <div className="px-8 pb-8 text-slate-400 leading-relaxed text-base animate-slideDown">
                    <div className="h-px bg-white/5 mb-6" />
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 italic">এখনই আপনার ডিজিটাল লাইফ সুরক্ষিত করুন।</h2>
        <Link to="/register" className="inline-flex items-center gap-3 px-12 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black uppercase text-sm tracking-[0.2em] transition-all">
          Register Now <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </section>

      {/* Custom Keyframe for Animation */}
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default About;