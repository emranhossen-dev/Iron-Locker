import React from "react";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
// Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  const { user } = useAuth();

  const faqs = [
    { q: "এটি কি সত্যিই নিরাপদ?", a: "হ্যাঁ, আপনার প্রতিটি ফাইল ফায়ারবেস সিকিউরিটি এবং AES-256 এনক্রিপশন দ্বারা সুরক্ষিত।" },
    { q: "আমি কতটুকু স্টোরেজ পাব?", a: "আমরা প্রতিটি ইউজারকে আজীবনের জন্য ৫ জিবি পর্যন্ত ফ্রি ক্লাউড স্টোরেজ সুবিধা দিচ্ছি।" },
    { q: "মোবাইল থেকে কি ব্যবহার করা যাবে?", a: "অবশ্যই! এটি ১০০% মোবাইল রেসপনসিভ ভাবে তৈরি করা হয়েছে।" },
    { q: "পাসওয়ার্ড ভুলে গেলে কি হবে?", a: "আপনি আপনার রেজিস্টার্ড ইমেইল ব্যবহার করে খুব সহজেই পাসওয়ার্ড রিসেট করতে পারবেন।" },
    { q: "ফাইল সাইজ লিমিট কত?", a: "সিঙ্গেল ফাইলে সর্বোচ্চ ১০০ এমবি পর্যন্ত আপলোড করতে পারবেন।" },
    { q: "কি ধরনের ফাইল রাখা যাবে?", a: "সার্টিফিকেট, এনআইডি, সিগনেচার এবং যেকোনো গুরুত্বপূর্ণ ছবি বা পিডিএফ।" },
    { q: "সার্ভিস কি সবসময় ফ্রি থাকবে?", a: "বেসিক ৫ জিবি স্টোরেজ প্ল্যানটি আজীবনের জন্য ফ্রি থাকবে।" },
    { q: "সাপোর্ট টিম কখন পাওয়া যাবে?", a: "যেকোনো টেকনিক্যাল প্রয়োজনে আমাদের সাপোর্ট টিম ২৪/৭ পাশে আছে।" },
    { q: "অ্যাকাউন্ট ডিলিট করা যাবে?", a: "হ্যাঁ, প্রোফাইল সেটিংস থেকে আপনি যেকোনো সময় আপনার ডেটা ডিলিট করতে পারবেন।" },
    { q: "নতুন ফিচার কবে আসবে?", a: "আমরা নিয়মিত আপডেট করি, খুব শীঘ্রই শেয়ারিং ফিচারটি যুক্ত করা হবে।" }
  ];

  const steps = [
    {
      s: "০১",
      h: "রেজিস্ট্রেশন বা লগইন করুন",
      d: "প্রথমে 'শুরু করুন' বাটনে ক্লিক করে আপনার নাম, ইমেইল এবং পাসওয়ার্ড দিয়ে একটি ফ্রি একাউন্ট তৈরি করুন।",
      img: "https://via.placeholder.com/600x300/1e293b/4f46e5?text=Login+Screen+Snapshot"
    },
    {
      s: "০২",
      h: "ক্যাটাগরি অনুযায়ী ফাইল আপলোড",
      d: "ড্যাশবোর্ড থেকে ক্যাটাগরি সিলেক্ট করে ড্র্যাগ এন্ড ড্রপ বা ফাইল সিলেক্টর ব্যবহার করে আপলোড সম্পন্ন করুন।",
      img: "https://via.placeholder.com/600x300/1e293b/4f46e5?text=Upload+Process+Snapshot"
    },
    {
      s: "০৩",
      h: "নিরাপদ এক্সেস ও প্রিভিউ",
      d: "আপনার ভল্ট থেকে সরাসরি ফাইল প্রিভিউ করুন অথবা যেকোনো প্রয়োজনে নিরাপদ ডাউনলোড করুন।",
      img: "https://via.placeholder.com/600x300/1e293b/4f46e5?text=Dashboard+Preview+Snapshot"
    }
  ];

  return (
    <div className="bg-[#020617] text-white pt-16 overflow-hidden scroll-smooth font-['Inter']">
      
      {/* 1. HERO SECTION */}
      <section id="home" className="relative pt-32 pb-20 px-6 text-center scroll-mt-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-indigo-600/10 blur-[120px] -z-10"></div>
        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tighter uppercase">
          Iron <span className="text-indigo-500 italic">Vault.</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed italic">
          আপনার মূল্যবান সার্টিফিকেট ও ডকুমেন্টগুলো একটি নিরাপদ ভল্টে গুছিয়ে রাখুন। দ্রুত, নিরাপদ এবং সম্পূর্ণ ফ্রি।
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/register" className="btn btn-primary btn-lg rounded-2xl px-12 font-black shadow-xl shadow-indigo-500/20 uppercase text-xs tracking-widest">শুরু করুন</Link>
          <a href="#preview" className="btn btn-ghost border border-white/10 btn-lg rounded-2xl uppercase text-xs tracking-widest">প্রিভিউ দেখুন</a>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-10 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-black uppercase">
          <div><h2 className="text-3xl text-indigo-500">১০০০+</h2><p className="text-[10px] text-slate-500 tracking-widest mt-1">ফাইল সুরক্ষিত</p></div>
          <div><h2 className="text-3xl text-indigo-500">৫ জিবি</h2><p className="text-[10px] text-slate-500 tracking-widest mt-1">ফ্রি স্টোরেজ</p></div>
          <div><h2 className="text-3xl text-indigo-500">৯৯.৯%</h2><p className="text-[10px] text-slate-500 tracking-widest mt-1">আপটাইম</p></div>
          <div><h2 className="text-3xl text-indigo-500">২৪/৭</h2><p className="text-[10px] text-slate-500 tracking-widest mt-1">সাপোর্ট</p></div>
        </div>
      </section>

      {/* 3. Why Choose Section */}
      <section id="features" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-8 leading-tight italic">কেন ড্রাইভ ছেড়ে <br/> IronLocker বেছে নিবেন?</h2>
            <div className="space-y-8">
              <div className="flex gap-5 group">
                <div className="w-14 h-14 bg-indigo-600/20 rounded-2xl flex items-center justify-center shrink-0 text-2xl border border-indigo-500/20 group-hover:scale-110 transition-transform">🚀</div>
                <div>
                  <h4 className="text-xl font-bold mb-1 italic">অত্যন্ত দ্রুত গতির এক্সেস</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">আমাদের ইন্টারফেসটি এমনভাবে তৈরি যাতে আপনি কয়েক সেকেন্ডের মধ্যে আপনার ফাইলটি খুঁজে পান।</p>
                </div>
              </div>
              <div className="flex gap-5 group">
                <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center shrink-0 text-2xl border border-purple-500/20 group-hover:scale-110 transition-transform">📂</div>
                <div>
                  <h4 className="text-xl font-bold mb-1 italic">স্মার্ট ক্যাটাগরি</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">সার্টিফিকেট, এনআইডি বা ফটো - সব কিছুর জন্য আলাদা এবং সুসংগঠিত ফোল্ডার সিস্টেম।</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-5 text-indigo-500 text-9xl font-black">!</div>
             <h3 className="text-xs font-black mb-8 text-center uppercase tracking-[0.5em] text-indigo-500">Security Specs</h3>
             <table className="w-full text-sm">
              <thead className="border-b border-white/10 text-slate-500 uppercase text-[10px] font-black tracking-widest">
                <tr><th className="pb-4 text-left">ফিচার</th><th className="pb-4">অন্যান্য</th><th className="pb-4 text-indigo-500">IronLocker</th></tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-white/5"><td className="py-5 font-bold">ক্যাটাগরি</td><td className="py-5 text-center">❌</td><td className="py-5 text-center text-green-500 font-black text-lg">✅</td></tr>
                <tr className="border-b border-white/5"><td className="py-5 font-bold">স্মার্ট প্রিভিউ</td><td className="py-5 text-center">❌</td><td className="py-5 text-center text-green-500 font-black text-lg">✅</td></tr>
                <tr><td className="py-5 font-bold">ডাউনলোড গতি</td><td className="py-5 text-center">⚠️</td><td className="py-5 text-center text-green-500 font-black text-lg">✅</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Dashboard Preview */}
      <section id="preview" className="py-24 px-6 bg-white/[0.01] border-t border-white/5 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-2 italic uppercase">Dashboard Preview</h2>
            <p className="text-slate-500 uppercase text-[10px] tracking-[0.4em] font-black">ক্লিন এবং মডার্ন ইউজার ইন্টারফেস</p>
          </div>
          <div className="bg-[#0f172a] rounded-[3.5rem] p-6 md:p-12 border border-white/10 shadow-3xl">
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[{ n: "১০০+", t: "ফটোগ্রাফ" }, { n: "০৫", t: "সার্টিফিকেট" }, { n: "০৩", t: "সিগনেচার" }, { n: "১২", t: "অন্যান্য" }].map((item, i) => (
                  <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-[2rem] text-center hover:border-indigo-500 transition-all group">
                    <h3 className="text-3xl font-black text-indigo-500 group-hover:scale-110 transition-transform">{item.n}</h3>
                    <p className="text-[10px] text-slate-500 font-black uppercase mt-1 tracking-widest">{item.t}</p>
                  </div>
                ))}
             </div>
             <div className="h-64 w-full border-2 border-dashed border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center text-slate-600 bg-black/20 italic font-black text-xs uppercase tracking-widest">
                <span className="text-5xl mb-4 opacity-20">📂</span>
                <p>Protected Space Preview</p>
             </div>
          </div>
        </div>
      </section>

      {/* 5. How To Operate */}
      <section id="how-to-use" className="py-24 px-6 border-t border-white/5 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 italic text-indigo-500 uppercase">How To Operate</h2>
            <p className="text-slate-500 uppercase text-[10px] tracking-[0.4em] font-black">ধাপে ধাপে ব্যবহার করার নিয়ম</p>
          </div>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <details key={i} className="group bg-slate-900 border border-white/10 rounded-[2.5rem] p-4 cursor-pointer overflow-hidden transition-all duration-500" open={i === 0}>
                <summary className="font-black list-none flex justify-between items-center p-4">
                  <div className="flex items-center gap-6">
                    <span className="text-4xl text-indigo-500/30 font-black italic">{step.s}</span>
                    <h4 className="text-xl md:text-2xl italic uppercase tracking-tighter">{step.h}</h4>
                  </div>
                  <span className="text-indigo-500 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-6 pt-4 border-t border-white/5 space-y-6">
                   <p className="text-slate-400 leading-relaxed font-medium italic">{step.d}</p>
                   <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-black/40">
                      <img src={step.img} alt={step.h} className="w-full h-auto opacity-70 grayscale hover:grayscale-0 transition-all duration-700" />
                   </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section id="faq" className="py-24 px-6 bg-white/[0.01] border-t border-white/5 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 italic uppercase">General <span className="text-indigo-500">FAQ</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-slate-900 border border-white/10 rounded-[2rem] p-6 cursor-pointer">
                <summary className="font-bold list-none flex justify-between items-center italic">
                  {faq.q} <span className="text-indigo-500 group-open:rotate-180 transition-transform text-xs">▼</span>
                </summary>
                <p className="mt-4 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4 italic">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA (Dark Mode) */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto bg-slate-900 border border-white/10 p-12 md:p-20 rounded-[4rem] text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500/30"></div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 italic tracking-tighter uppercase">Ready to Start?</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto leading-relaxed italic">
            Join the Iron Vault today and claim your 5GB lifetime free cloud storage.
          </p>
          <Link to="/register" className="btn btn-lg bg-indigo-600 border-none text-white px-16 rounded-2xl font-black hover:bg-indigo-700 uppercase text-xs tracking-[0.2em] shadow-xl shadow-indigo-500/20">
            Get Started Now
          </Link>
        </div>
      </section>

      {/* 8. Developer Contact Section */}
      <section id="contact" className="py-24 px-6 border-t border-white/5 bg-white/[0.01] scroll-mt-20">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Developer Identity */}
          <div className="flex-1">
            <h2 className="text-5xl font-black mb-6 italic tracking-tighter text-indigo-500 uppercase">
              Meet The <br/> Developer
            </h2>
            <div className="mb-10">
               <h3 className="text-3xl font-black italic mb-2 uppercase tracking-tighter text-white">Emran Hossen</h3>
               <p className="text-indigo-400 font-black uppercase text-[10px] tracking-[0.4em] mb-6">Full Stack Developer</p>
               <p className="text-slate-400 max-w-sm leading-relaxed font-medium italic">
                 I am a passionate Full Stack Developer dedicated to building secure, scalable, and high-performance web applications.
               </p>
            </div>
            
            <div className="space-y-5">
               <a href="https://github.com/emranhossen-dev" target="_blank" rel="noreferrer" className="flex items-center gap-5 group w-fit">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-indigo-500 group-hover:bg-indigo-500/10 transition-all">
                    <FontAwesomeIcon icon={faGithub} className="text-slate-400 group-hover:text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-slate-500">GitHub</p>
                    <p className="font-bold text-slate-300 group-hover:text-indigo-400 transition-colors">emranhossen-dev</p>
                  </div>
               </a>

               <a href="https://linkedin.com/in/emranhossen-dev" target="_blank" rel="noreferrer" className="flex items-center gap-5 group w-fit">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-indigo-500 group-hover:bg-indigo-500/10 transition-all">
                    <FontAwesomeIcon icon={faLinkedin} className="text-slate-400 group-hover:text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-slate-500">LinkedIn</p>
                    <p className="font-bold text-slate-300 group-hover:text-indigo-400 transition-colors">emranhossen-dev</p>
                  </div>
               </a>

               <div className="flex items-center gap-5 group w-fit">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-indigo-500 group-hover:bg-indigo-500/10 transition-all">
                    <FontAwesomeIcon icon={faEnvelope} className="text-slate-400 group-hover:text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-slate-500">Email Me</p>
                    <p className="font-bold text-slate-300 group-hover:text-indigo-400 transition-colors text-sm">dev.emranhossen@gmail.com</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 bg-slate-900/50 p-10 rounded-[3.5rem] border border-white/10 shadow-3xl relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <FontAwesomeIcon icon={faPaperPlane} className="text-indigo-500 text-7xl" />
            </div>
            <h4 className="text-xs font-black uppercase tracking-[0.5em] text-center mb-10 text-indigo-500">Send a Message</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="input input-bordered w-full bg-white/5 border-white/10 h-14 rounded-2xl outline-none focus:border-indigo-500 font-bold text-white italic" />
              <input type="email" placeholder="Email Address" className="input input-bordered w-full bg-white/5 border-white/10 h-14 rounded-2xl outline-none focus:border-indigo-500 font-bold text-white italic" />
              <textarea placeholder="How can I help you?" className="textarea textarea-bordered w-full bg-white/5 border-white/10 rounded-2xl h-36 pt-5 outline-none focus:border-indigo-500 leading-relaxed font-bold text-white italic"></textarea>
              <button className="btn btn-primary w-full h-15 rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-indigo-500/20 gap-3">
                Send Message <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-white/5 bg-black/20">
        <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.6em]">
          IronLocker © 2026 • Mohammadpur, Dhaka • Designed & Developed by Emran Hossen
        </p>
      </footer>    
    </div>
  );
};

export default Landing;