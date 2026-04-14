import React, { useState } from "react";

const Dashboard = () => {
  const [files] = useState([]); // Empty to trigger No Files UI

  return (
    <div className="screen-height-minus-nav flex bg-[#020617] p-6 gap-6 overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className="w-64 flex flex-col h-full shrink-0">
        <button className="btn btn-primary w-full h-14 rounded-2xl shadow-xl shadow-indigo-600/20 mb-10 font-bold text-lg">
          + New Upload
        </button>
        
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
          <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest px-4 mb-4">Vault Categories</p>
          <div className="space-y-1">
            {["All Items", "HSC Records", "NID / Passport", "Signature", "Others"].map((item, i) => (
              <button key={i} className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all ${i === 0 ? 'bg-indigo-600/10 text-indigo-400 font-bold' : 'text-slate-500 hover:bg-white/5 hover:text-white'}`}>
                {item}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/5">
           <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">Storage</p>
           <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-indigo-500 w-[5%] h-full"></div>
           </div>
           <p className="text-[10px] text-indigo-400 mt-2">0.02 GB / 5.0 GB</p>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 bg-white/[0.02] border border-white/5 rounded-[3rem] flex flex-col overflow-hidden">
        {/* Fixed Sub-Header */}
        <div className="p-8 border-b border-white/5 bg-white/[0.01] flex justify-between items-center">
           <h2 className="text-xl font-bold text-white tracking-tight italic">Explorer</h2>
           <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Protocol Secured</span>
           </div>
        </div>

        {/* Scrollable File Grid */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {files.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/5">
                <span className="text-4xl opacity-50 grayscale">📂</span>
              </div>
              <h3 className="text-xl font-black text-white">No Records</h3>
              <p className="text-sm text-slate-500 max-w-xs mt-2">
                Your secure vault is empty. Upload your first document to initialize the storage.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {/* File cards will map here */}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;