import React from "react";

const HowToUse = () => {
  const deviceSteps = [
    "Search for the website in any modern browser (Chrome/Edge/Safari).",
    "Navigate to the Login page.",
    "Login to your vault using your Email and Password.",
    "Access your personal Dashboard.",
    "Find your document and click the Download button.",
    "Simply Logout once finished to keep your data secure."
  ];

  return (
    <div className="min-h-screen bg-[#020617] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black italic mb-4">How to <span className="text-indigo-500">Operate</span></h1>
          <p className="text-slate-500 text-xs uppercase tracking-[0.4em] font-black">IronLocker User Guide</p>
        </header>

        {/* Access Logic Section */}
        <section className="bg-slate-900/50 border border-white/5 rounded-[3.5rem] p-10 md:p-14">
          <h2 className="text-2xl font-black text-white mb-8 italic">Share or Access from another Device</h2>
          <div className="grid gap-4">
            {deviceSteps.map((step, i) => (
              <div key={i} className="flex gap-5 items-center bg-white/[0.02] p-6 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all">
                <span className="w-10 h-10 rounded-full bg-indigo-600/10 text-indigo-500 flex items-center justify-center font-black text-sm shrink-0 border border-indigo-500/20">
                  {i + 1}
                </span>
                <p className="text-slate-300 text-sm font-medium leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Extra Info */}
        <div className="mt-12 text-center">
           <p className="text-slate-500 text-xs italic">"IronLocker makes cross-device document transfers effortless and secure."</p>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;