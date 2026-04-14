import React, { useState, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase.init";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Landing = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#020617] text-white overflow-x-hidden">
      {/* 1. WELCOME BANNER (Hero) */}
      <section className="relative pt-20 pb-16 px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-80 bg-indigo-600/10 blur-[120px] -z-10"></div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
            The Smart Way to <br />
            <span className="text-indigo-500 underline decoration-indigo-500/30">
              Vault Your Life.
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            A secure, MERN-powered cloud specifically designed for your
            certificates, digital signatures, and essential media.
          </p>
        </div>
      </section>

      {/* --- 2. PREVIEW DASHBOARD SECTION (High Confidence) --- */}
      <section className="px-6 py-10" id="preview">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest">
              Interface Preview
            </h2>
          </div>

          {/* Real-look Dashboard Container */}
          <div className="bg-[#0f172a] rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Header Preview */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
              <div>
                <h3 className="text-2xl font-bold">My Personal Vault</h3>
                <p className="text-slate-500 text-sm">
                  Sample view of your organized documents
                </p>
              </div>
              <div className="flex gap-2">
                <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10"></div>
                <div className="h-10 px-4 flex items-center bg-indigo-600/20 text-indigo-400 rounded-xl text-sm font-bold border border-indigo-500/20">
                  + Upload New
                </div>
              </div>
            </div>

            {/* Categories Grid (Visible & Clear) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  name: "Photos",
                  count: 124,
                  icon: "🖼️",
                  color: "bg-orange-500/10 text-orange-500",
                },
                {
                  name: "Certificates",
                  count: 12,
                  icon: "📜",
                  color: "bg-red-500/10 text-red-500",
                },
                {
                  name: "Signatures",
                  count: 5,
                  icon: "✍️",
                  color: "bg-purple-500/10 text-purple-500",
                },
                {
                  name: "Work Docs",
                  count: 89,
                  icon: "📁",
                  color: "bg-blue-500/10 text-blue-500",
                },
              ].map((cat, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 p-6 rounded-[2rem] transition-all hover:bg-white/[0.07]"
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${cat.color}`}
                  >
                    {cat.icon}
                  </div>
                  <h4 className="font-bold text-white">{cat.name}</h4>
                  <p className="text-slate-500 text-xs mt-1">
                    {cat.count} Files Saved
                  </p>
                </div>
              ))}
            </div>

            {/* Recent Files Table (Clean & Readable) */}
            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <table className="table w-full text-left">
                <thead>
                  <tr className="border-b border-white/5 text-slate-500 text-[10px] uppercase">
                    <th className="p-4">Document Name</th>
                    <th className="hidden md:table-cell">Category</th>
                    <th className="text-right p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-white/5">
                    <td className="p-4 flex items-center gap-2">
                      📄 NID_Front_Side.jpg
                    </td>
                    <td className="hidden md:table-cell text-slate-500">
                      Personal
                    </td>
                    <td className="text-right p-4">
                      <span className="text-green-500 font-medium text-xs">
                        Verified
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 flex items-center gap-2">
                      📄 Experience_Letter.pdf
                    </td>
                    <td className="hidden md:table-cell text-slate-500">
                      Work
                    </td>
                    <td className="text-right p-4">
                      <span className="text-green-500 font-medium text-xs">
                        Verified
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY USE IT / 4. BENEFITS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why DocsVault?</h2>
          <p className="text-slate-500">
            Stop searching through emails. Keep it all in one professional
            space.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h4 className="text-xl font-bold">Centralized Storage</h4>
                <p className="text-slate-400">
                  Your HSC/SSC certificates, NIID, and signatures in one
                  organized grid.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h4 className="text-xl font-bold">Fast Retrieval</h4>
                <p className="text-slate-400">
                  Download your documents instantly from any device, anywhere in
                  the world.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-indigo-500/5 border border-indigo-500/10 p-10 rounded-[2rem] text-center">
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">
              100% Private
            </h3>
            <p className="text-slate-400 italic text-sm">
              "Built for developers and professionals who value their digital
              privacy and need a clean UI."
            </p>
          </div>
        </div>
      </section>

      {/* 5. FEATURES SECTION */}
      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#0f172a] border border-white/5 rounded-[2rem]">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 text-2xl">
                🖼️
              </div>
              <h3 className="text-xl font-bold mb-2">ImgBB Hosting</h3>
              <p className="text-slate-500 text-sm">
                High-quality image hosting with fast global delivery.
              </p>
            </div>
            <div className="p-8 bg-[#0f172a] border border-white/5 rounded-[2rem]">
              <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 mb-6 text-2xl">
                🔐
              </div>
              <h3 className="text-xl font-bold mb-2">Firebase Auth</h3>
              <p className="text-slate-500 text-sm">
                Secure Google-powered login keeps hackers away.
              </p>
            </div>
            <div className="p-8 bg-[#0f172a] border border-white/5 rounded-[2rem]">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500 mb-6 text-2xl">
                📱
              </div>
              <h3 className="text-xl font-bold mb-2">Fully Responsive</h3>
              <p className="text-slate-500 text-sm">
                Access your vault from your phone, tablet, or desktop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GET STARTED */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-indigo-600 to-purple-700 p-12 md:p-20 rounded-[3rem] shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to organize?
          </h2>
          <p className="text-white/80 mb-10">
            Join professionals who trust DocsVault for their certificates.
          </p>
          <button
            onClick={handleLogin}
            className="btn btn-lg bg-white text-black border-none px-12 rounded-2xl shadow-xl hover:scale-105 transition-all"
          >
            Start My Vault
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
