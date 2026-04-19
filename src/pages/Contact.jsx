import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPaperPlane, 
  faEnvelope, 
  faHeadset, 
  faLocationDot,
  faShareNodes
} from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebookF, 
  faLinkedinIn, 
  faGithub 
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="bg-[#020617] text-white font-['Hind_Siliguri'] py-20 px-6 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full -z-10" />
          <h1 className="text-5xl md:text-7xl font-black italic uppercase mb-6 tracking-tighter">
            কথা <span className="text-indigo-500">বলুন</span> আমাদের সাথে
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            আপনার কোনো প্রযুক্তিগত সমস্যা, ফিডব্যাক বা ব্যবসার প্রয়োজনে আমাদের টিম সবসময় পাশে আছে।
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* --- LEFT: CONTACT INFO --- */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="text-3xl font-bold mb-8 italic uppercase flex items-center gap-4">
                সরাসরি <span className="text-indigo-500">যোগাযোগ</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: faEnvelope, label: "ইমেইল করুন", info: "support@ironlocker.com", sub: "আমরা ২৪ ঘণ্টার মধ্যে রিপ্লাই দেই।" },
                  { icon: faHeadset, label: "ফোন করুন", info: "+৮৮০ ১৭০০-০০০০০০", sub: "শনিবার-বৃহস্পতিবার (সকাল ১০টা - রাত ৮টা)" },
                  { icon: faLocationDot, label: "অফিস লোকেশন", info: "ঢাকা, বাংলাদেশ", sub: "ডিজিটাল ভল্ট টেকনোলজি সেন্টার" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-indigo-600/10 rounded-2xl flex items-center justify-center text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      <FontAwesomeIcon icon={item.icon} size="lg" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black tracking-widest text-slate-500 mb-1">{item.label}</p>
                      <p className="text-lg font-bold text-slate-200">{item.info}</p>
                      <p className="text-xs text-slate-500 italic mt-1">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- SOCIAL LINKS --- */}
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-600 mb-6 flex items-center gap-3">
                <FontAwesomeIcon icon={faShareNodes} className="text-indigo-500" /> Connect on Social
              </p>
              <div className="flex gap-4">
                {[faFacebookF, faLinkedinIn, faGithub].map((social, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-500 transition-all text-slate-400 hover:text-white">
                    <FontAwesomeIcon icon={social} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT: CONTACT FORM --- */}
          <div className="lg:col-span-7">
            <form className="bg-slate-900/40 border border-white/10 p-8 md:p-12 rounded-[3.5rem] relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-600/10 blur-2xl rounded-full" />
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3 block">আপনার নাম</label>
                  <input 
                    type="text" 
                    placeholder="Emran Hossen" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-indigo-500 focus:bg-indigo-600/5 transition-all"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3 block">ইমেইল এড্রেস</label>
                  <input 
                    type="email" 
                    placeholder="example@mail.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-indigo-500 focus:bg-indigo-600/5 transition-all"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3 block">মেসেজের বিষয়</label>
                <select className="w-full bg-[#020617] border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-indigo-500 transition-all appearance-none">
                  <option>টেকনিক্যাল সাপোর্ট</option>
                  <option>অ্যাকাউন্ট সমস্যা</option>
                  <option>ফিডব্যাক বা পরামর্শ</option>
                  <option>অন্যান্য</option>
                </select>
              </div>

              <div className="mb-10">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3 block">আপনার মেসেজ</label>
                <textarea 
                  rows="5" 
                  placeholder="আপনার সমস্যা বা প্রশ্নটি এখানে বিস্তারিত লিখুন..." 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white outline-none focus:border-indigo-500 focus:bg-indigo-600/5 transition-all"
                ></textarea>
              </div>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-6 rounded-[2rem] font-black uppercase text-sm tracking-[0.3em] flex items-center justify-center gap-4 transition-all shadow-xl shadow-indigo-600/20 active:scale-95">
                মেসেজ পাঠান <FontAwesomeIcon icon={faPaperPlane} className="animate-bounce" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;