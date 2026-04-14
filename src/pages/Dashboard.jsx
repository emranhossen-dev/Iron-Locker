import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";

const Dashboard = () => {
  const { user, loading } = useAuth();

  if (loading) return <div className="h-screen bg-[#020617] flex items-center justify-center font-bold text-white">Loading Vault...</div>;
  if (!user) return <Navigate to="/" />;

  return (
    <div className="flex min-h-screen bg-[#020617] text-white">
      {/* Sidebar: Only shows on large screens */}
      <aside className="hidden lg:flex w-72 border-r border-white/5 p-8 flex-col sticky top-0 h-screen">
        <div className="flex-grow">
          <h2 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-10">Menu</h2>
          <nav className="space-y-4">
            <button className="text-indigo-400 font-medium block">Overview</button>
            <button className="text-slate-500 hover:text-white block transition-colors">My Documents</button>
            <button className="text-slate-500 hover:text-white block transition-colors">Settings</button>
          </nav>
        </div>
        <button onClick={() => signOut(auth)} className="btn btn-outline btn-error btn-sm rounded-xl">Logout</button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-12">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-black">My Vault</h1>
            <p className="text-slate-400">Welcome, {user.displayName}</p>
          </div>
          <button className="btn bg-indigo-600 hover:bg-indigo-700 border-none rounded-xl text-white px-8">
            + Upload Document
          </button>
        </header>

        {/* Stats Grid: Stacks on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {["Photos", "Certificates", "Signatures", "Work"].map((label, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:border-indigo-500/50 transition-all cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4">📁</div>
              <h4 className="font-bold">{label}</h4>
              <p className="text-xs text-slate-500 mt-1">Managed securely</p>
            </div>
          ))}
        </div>

        {/* Table Area */}
        <div className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden">
          <div className="p-6 border-b border-white/5 font-bold">Recent Files</div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="text-slate-500 uppercase text-[10px]">
                <tr>
                  <th className="bg-transparent px-6">Name</th>
                  <th className="bg-transparent hidden md:table-cell">Date</th>
                  <th className="bg-transparent text-right px-6">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5 hover:bg-white/[0.01]">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <span className="text-xl">📄</span> HSC_Result.pdf
                  </td>
                  <td className="hidden md:table-cell text-slate-500">Apr 14, 2026</td>
                  <td className="text-right px-6">
                    <button className="btn btn-ghost btn-sm">Download</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;