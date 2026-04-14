import React from "react";
import { Link } from "react-router";

const Landing = () => {
  const faqs = [
    { q: "IronLocker কি আসলেই ফ্রি?", a: "হ্যাঁ, আমরা আজীবনের জন্য ৫ জিবি ফ্রি স্টোরেজ প্রদান করি।" },
    { q: "আমার ফাইল কি নিরাপদ?", a: "আমরা AES-256 এনক্রিপশন ব্যবহার করি যা ব্যাংকিং লেভেলের নিরাপত্তা নিশ্চিত করে।" },
    { q: "পাসওয়ার্ড ভুলে গেলে কি হবে?", a: "আপনি আপনার ভেরিফাইড ইমেইল দিয়ে পাসওয়ার্ড রিসেট করতে পারবেন।" },
    { q: "ফাইল সাইজ লিমিট কত?", a: "প্রতিটি ফাইল সর্বোচ্চ ১০০ এমবি পর্যন্ত হতে পারে।" },
    { q: "কোন কোন ফাইল রাখা যাবে?", a: "সার্টিফিকেট, এনআইডি, ফটো এবং যেকোনো পিডিএফ ডকুমেন্ট।" },
    { q: "মোবাইলে ব্যবহার করা যাবে?", a: "অবশ্যই, আমাদের সাইটটি সম্পূর্ণ মোবাইল রেসপনসিভ।" },
    { q: "স্টোরেজ শেষ হলে কি হবে?", a: "আপনি চাইলে খুব অল্প খরচে প্রিমিয়াম প্ল্যানে আপগ্রেড করতে পারবেন।" },
    { q: "ফাইলগুলো কি শেয়ার করা যায়?", a: "সুরক্ষার স্বার্থে শেয়ারিং অপশনটি বর্তমানে শুধুমাত্র আপনার একাউন্টেই সীমাবদ্ধ।" },
    { q: "এক একাউন্ট কয়টি ডিভাইসে?", a: "আপনি একসাথে আনলিমিটেড ডিভাইসে লগইন করে ফাইল এক্সেস করতে পারবেন।" },
    { q: "সাপোর্ট টিম কখন থাকে?", a: "আমাদের সাপোর্ট টিম ২৪/৭ আপনার যেকোনো প্রয়োজনে পাশে আছে।" }
  ];

  return (
    <div className="bg-[#020617] text-white overflow-hidden scroll-smooth font-['Inter']">
      
      {/* 1. HERO SECTION */}
      <section id="home" className="relative pt-32 pb-20 px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-indigo-600/10 blur-[120px] -z-10"></div>
        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tighter uppercase">
          Iron <span className="text-indigo-500 italic">Vault.</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          আপনার মূল্যবান সার্টিফিকেট ও ডকুমেন্টগুলো একটি নিরাপদ ভল্টে গুছিয়ে রাখুন। দ্রুত, নিরাপদ এবং সম্পূর্ণ ফ্রি।
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/register" className="btn btn-primary btn-lg rounded-2xl px-12 font-black shadow-xl shadow-indigo-500/20 uppercase text-xs">শুরু করুন</Link>
          <a href="#preview" className="btn btn-ghost border border-white/10 btn-lg rounded-2xl uppercase text-xs">প্রিভিউ দেখুন</a>
        </div>
      </section>

      {/* 2. STATS SECTION (Trust Section) */}
      <section id="stats" className="py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-black uppercase">
          <div><h2 className="text-3xl text-indigo-500">১০০০+</h2><p className="text-[10px] text-slate-500 tracking-[0.3em] mt-1">সক্রিয় ইউজার</p></div>
          <div><h2 className="text-3xl text-indigo-500">৫ জিবি</h2><p className="text-[10px] text-slate-500 tracking-[0.3em] mt-1">ফ্রি ক্লাউড</p></div>
          <div><h2 className="text-3xl text-indigo-500">৯৯.৯%</h2><p className="text-[10px] text-slate-500 tracking-[0.3em] mt-1">নিরাপত্তা</p></div>
          <div><h2 className="text-3xl text-indigo-500">২৪/৭</h2><p className="text-[10px] text-slate-500 tracking-[0.3em] mt-1">সাপোর্ট</p></div>
        </div>
      </section>

      {/* 3. WHY CHOOSE SECTION (Features) */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-8 leading-tight italic">কেন IronLocker <br/> আপনার সেরা পছন্দ?</h2>
            <div className="space-y-8">
              <div className="flex gap-5 group">
                <div className="w-14 h-14 bg-indigo-600/20 rounded-2xl flex items-center justify-center shrink-0 text-2xl border border-indigo-500/20 group-hover:scale-110 transition-transform">🔒</div>
                <div><h4 className="text-xl font-bold mb-1">ব্যাংকিং লেভেল সিকিউরিটি</h4><p className="text-slate-400 text-sm">আপনার প্রতিটি ফাইল এনক্রিপশন প্রোটোকলের মাধ্যমে সুরক্ষিত থাকে।</p></div>
              </div>
              <div className="flex gap-5 group">
                <div className="w-14 h-14 bg-purple-600/20 rounded-2xl flex items-center justify-center shrink-0 text-2xl border border-purple-500/20 group-hover:scale-110 transition-transform">📂</div>
                <div><h4 className="text-xl font-bold mb-1">স্মার্ট অর্গানাইজার</h4><p className="text-slate-400 text-sm">সার্টিফিকেট, এনআইডি বা ছবি - সবকিছু অটোমেটিক আলাদা ফোল্ডারে।</p></div>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 border border-white/10 rounded-[3rem] p-8 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-10 text-indigo-500 text-9xl font-black">?</div>
             <h3 className="text-xs font-black mb-8 text-center uppercase tracking-[0.5em] text-indigo-500">Service Reliability</h3>
             <div className="space-y-4">
                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-4"><span>Uptime Guarantee</span><span className="text-green-500 font-bold">99.9%</span></div>
                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-4"><span>Encryption Level</span><span className="text-green-500 font-bold">AES-256</span></div>
                <div className="flex justify-between items-center text-sm"><span>Daily Backup</span><span className="text-green-500 font-bold">Enabled</span></div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. INTERFACE PREVIEW SECTION */}
      <section id="preview" className="py-24 px-6 bg-white/[0.01] border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-16 italic uppercase text-indigo-500">Modern Dashboard</h2>
          <div className="bg-[#0f172a] rounded-[3.5rem] p-6 md:p-12 border border-white/10 shadow-3xl">
             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[{ n: "১০০+", t: "ফটোগ্রাফ" }, { n: "০৫", t: "সার্টিফিকেট" }, { n: "০৩", t: "সিগনেচার" }, { n: "১২", t: "অন্যান্য" }].map((item, i) => (
                  <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-[2rem] text-center hover:border-indigo-500 transition-all">
                    <h3 className="text-3xl font-black text-indigo-500">{item.n}</h3>
                    <p className="text-[10px] text-slate-500 font-black uppercase mt-1">{item.t}</p>
                  </div>
                ))}
             </div>
             <div className="h-48 border-2 border-dashed border-white/10 rounded-[2.5rem] flex items-center justify-center text-slate-600 bg-black/20">
                <p className="text-sm font-bold">ড্র্যাগ এন্ড ড্রপ ফাইল সাপোর্ট</p>
             </div>
          </div>
        </div>
      </section>

      {/* 5. HOW TO USE SECTION (New) */}
      <section id="how-to-use" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 italic text-indigo-500">How to Operate</h2>
            <p className="text-slate-500 uppercase text-[10px] tracking-[0.4em] font-black">ব্যবহার করার সহজ নিয়মাবলী</p>
          </div>
          <div className="grid gap-4">
            {[
              "আপনার ব্রাউজার থেকে IronLocker এ লগইন করুন।",
              "পছন্দমতো ক্যাটাগরি সিলেক্ট করে ফাইল আপলোড করুন।",
              "যেকোনো ডিভাইস থেকে ড্রাইভের মতো এক্সেস করুন।",
              "প্রয়োজনে ফাইল ডাউনলোড বা প্রিভিউ দেখুন।",
              "কাজ শেষে একাউন্টটি সুরক্ষিত রাখতে লগ-আউট করুন।"
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-center bg-slate-900 border border-white/5 p-6 rounded-[2rem] hover:border-indigo-500 transition-all group">
                <span className="w-12 h-12 rounded-full bg-indigo-600/10 text-indigo-500 flex items-center justify-center font-black border border-indigo-500/20 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {i + 1}
                </span>
                <p className="text-slate-300 text-sm font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION (Two Column Layout) */}
      <section id="faq" className="py-24 px-6 bg-white/[0.01] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 italic uppercase">FAQs</h2>
            <p className="text-slate-500 uppercase text-[10px] tracking-[0.4em] font-black">আপনার মনের সাধারণ কিছু প্রশ্নের উত্তর</p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="collapse collapse-plus bg-slate-900 border border-white/5 rounded-3xl">
                <input type="radio" name="faq-accordion" /> 
                <div className="collapse-title text-md font-bold p-6">{faq.q}</div>
                <div className="collapse-content px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GET STARTED / CTA SECTION */}
      <section id="get-started" className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 border border-white/10 p-12 md:p-20 rounded-[4rem] text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 italic tracking-tighter">Ready to Build Your Vault?</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">আজই রেজিস্টার করে ৫ জিবি ফ্রি ক্লাউড স্পেস বুঝে নিন। কোনো ক্রেডিট কার্ডের প্রয়োজন নেই।</p>
          <Link to="/register" className="btn btn-lg bg-indigo-600 border-none text-white px-16 rounded-2xl font-black hover:bg-indigo-700 uppercase text-xs">শুরু করুন এখন</Link>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <h2 className="text-5xl font-black mb-6 italic tracking-tighter text-indigo-500 uppercase">Contact Us</h2>
            <p className="text-slate-400 mb-10 max-w-sm leading-relaxed font-medium">যেকোনো টেকনিক্যাল সমস্যায় আমাদের মেসেজ দিন। আমাদের টিম ২৪ ঘণ্টার মধ্যে রিপ্লাই দিবে।</p>
            <div className="flex items-center gap-5 text-slate-300">
                <span className="w-14 h-14 bg-white/5 rounded-[1.5rem] flex items-center justify-center font-black border border-white/10 shrink-0 text-xl">@</span>
                <div><p className="text-[10px] uppercase font-black text-slate-500">Official Support</p><p className="font-bold text-lg">support@ironlocker.com</p></div>
            </div>
          </div>
          <div className="flex-1 bg-slate-900/50 p-10 rounded-[3.5rem] border border-white/10 shadow-3xl">
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="input input-bordered w-full bg-white/5 border-white/10 h-14 rounded-2xl text-white outline-none focus:border-indigo-500" />
              <input type="email" placeholder="Email Address" className="input input-bordered w-full bg-white/5 border-white/10 h-14 rounded-2xl text-white outline-none focus:border-indigo-500" />
              <textarea placeholder="Write message..." className="textarea textarea-bordered w-full bg-white/5 border-white/10 rounded-2xl h-36 pt-5 text-white outline-none focus:border-indigo-500"></textarea>
              <button className="btn btn-primary w-full h-14 rounded-2xl font-black uppercase tracking-widest">মেসেজ পাঠান</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-white/5 bg-black/20">
        <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.6em]">IronLocker © 2026 • Secure & Fast</p>
      </footer>
    </div>
  );
};

export default Landing;