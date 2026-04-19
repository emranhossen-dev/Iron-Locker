import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faPlus,
  faCloudArrowUp,
  faArrowLeft,
  faTimes,
  faFolder,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

import Sidebar from "../components/Sidebar"; 

const Dashboard = () => {
  const { user } = useAuth();
  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // UI States
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [viewMode, setViewMode] = useState("all"); 
  const [activeFolder, setActiveFolder] = useState(null);

  // Data States
  const [files, setFiles] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const categories = ["Academic Certificate", "Personal Photo", "Documents", "Professional Data", "Others"];

  const fetchFiles = async (category = null) => {
    if (!user?.email) return;
    try {
      setFetching(true);
      const url = category
        ? `${API_BASE_URL}/api/files/${user.email.toLowerCase()}/${category}`
        : `${API_BASE_URL}/api/files/user/${user.email.toLowerCase()}`;
      const res = await axios.get(url);
      setFiles(Array.isArray(res.data) ? res.data : []);
      setCurrentPage(1);
    } catch (err) {
      setFiles([]);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchFiles(activeFolder);
  }, [user?.email, activeFolder]);

  const handleLogout = () => {
    sessionStorage.removeItem("initialRedirect");
    signOut(auth);
  };

  const goToHome = () => { window.location.href = "/"; };

  const handleBack = () => {
    if (viewMode === "grid") {
      setViewMode("all");
    } else if (activeFolder) {
      setActiveFolder(null);
    }
  };

  const openFolderGrid = () => {
    setViewMode("grid");
    setActiveFolder(null);
  };

  const selectFolder = (cat) => {
    setActiveFolder(cat);
    setViewMode("all");
  };

  const downloadImage = async (url, title) => {
    const res = await fetch(url);
    const blob = await res.blob();
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `${title || "secure-asset"}.jpg`;
    link.click();
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const imageFile = form.image.files[0];
    if (!imageFile) return alert("Please select an image file.");
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      const imgbbRes = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData);
      if (imgbbRes.data.success) {
        await axios.post(`${API_BASE_URL}/api/files/add`, {
          title, category, imageUrl: imgbbRes.data.data.url, userEmail: user?.email.toLowerCase(),
        });
        setShowUploadModal(false);
        form.reset();
        fetchFiles(activeFolder);
      }
    } catch (error) {
      alert("Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  const currentFiles = files.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="flex h-screen bg-[#020617] overflow-hidden text-slate-300 font-['Hind_Siliguri']">
      
      <Sidebar 
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        viewMode={viewMode}
        resetDashboard={() => { setActiveFolder(null); setViewMode("all"); }}
        openFolderGrid={openFolderGrid}
        categories={categories}
        selectFolder={selectFolder}
        activeFolder={activeFolder}
        handleLogout={handleLogout}
      />

      <div className="flex-1 flex flex-col relative min-w-0">
        {/* TOP NAVBAR */}
        <header className="h-20 flex items-center justify-between px-4 md:px-10 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl sticky top-0 z-[90]">
          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer" onClick={() => setIsSidebarOpen(true)}>
              <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-indigo-500/20">
                <img src={user?.photoURL || "https://ui-avatars.com/api/?name=User"} alt="profile" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-indigo-600 rounded-full flex items-center justify-center border-2 border-[#020617] text-[7px] text-white">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
            
            {/* WELCOME MESSAGE WITH FULL NAME */}
            <div className="flex flex-col">
              <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest leading-none mb-1">Welcome Back,</span>
              <span className="text-white text-xs md:text-sm font-bold truncate max-w-[150px] md:max-w-[300px] block" title={user?.displayName}>
                {user?.displayName || "User"}
              </span>
            </div>
          </div>

          <button onClick={goToHome} className="h-10 px-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
            <FontAwesomeIcon icon={faHouse} /> <span className="hidden md:inline">Home</span>
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-10">
          <div className="max-w-7xl mx-auto">
            
            {/* THREE-BUTTON NAVIGATION BAR */}
            <div className="flex items-center justify-between gap-3 mb-10">
              <div className="flex items-center gap-2">
                {/* 1. BACK BUTTON */}
                {(activeFolder || viewMode === "grid") && (
                  <button 
                    onClick={handleBack}
                    className="h-12 w-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                )}

                {/* 2. ALL FOLDERS BUTTON (Folder Icon) */}
                <button 
                  onClick={openFolderGrid}
                  className={`h-12 px-5 rounded-2xl flex items-center gap-3 font-black uppercase text-[10px] tracking-widest border transition-all active:scale-95 ${
                    viewMode === "grid" 
                    ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/20" 
                    : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  <FontAwesomeIcon icon={faFolder} />
                  <span className="sm:inline">Folders</span>
                </button>
              </div>

              {/* 3. UPLOAD BUTTON */}
              <button 
                onClick={() => setShowUploadModal(true)} 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 h-12 rounded-2xl flex items-center gap-3 font-black uppercase text-[10px] tracking-widest transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
              >
                <FontAwesomeIcon icon={faPlus} />
                <span>Upload <span className="hidden sm:inline">Files</span></span>
              </button>
            </div>

            {/* DYNAMIC PAGE TITLE */}
            <h1 className="text-3xl md:text-5xl font-black italic uppercase text-white mb-8">
               {viewMode === "grid" ? "Library" : activeFolder || "All Assets"}
            </h1>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {categories.map((cat) => (
                  <div key={cat} onClick={() => selectFolder(cat)} className="group bg-slate-900/40 border border-white/5 p-6 md:p-10 rounded-[2.5rem] flex flex-col items-center cursor-pointer hover:border-indigo-500 transition-all">
                    <FontAwesomeIcon icon={faFolderOpen} className="text-3xl md:text-4xl mb-4 text-indigo-500/40 group-hover:text-indigo-500 transition-transform" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-center">{cat}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {fetching ? (
                   [1, 2, 3, 4].map((n) => (
                      <div key={n} className="h-64 bg-white/5 animate-pulse rounded-[2.5rem]"></div>
                   ))
                ) : files.length === 0 ? (
                  <div className="col-span-full py-20 bg-white/5 rounded-[2.5rem] border border-dashed border-white/10 text-center">
                    <p className="text-slate-500 uppercase font-black text-[10px] tracking-widest">No assets found</p>
                  </div>
                ) : (
                  currentFiles.map((file) => (
                    <div key={file._id} className="group relative bg-slate-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden">
                      <div className="h-48 overflow-hidden">
                        <img src={file.imageUrl} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500" alt={file.title} />
                      </div>
                      <div className="p-5">
                        <h3 className="text-sm font-bold text-white truncate uppercase mb-1">{file.title}</h3>
                        <span className="text-[8px] font-black px-2 py-0.5 bg-indigo-600/20 text-indigo-400 rounded-md uppercase">{file.category}</span>
                      </div>
                      <div className="absolute inset-0 bg-indigo-600/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-3 items-center justify-center backdrop-blur-[2px]">
                        <a href={file.imageUrl} target="_blank" rel="noreferrer" className="w-28 text-center bg-white text-black py-3 rounded-xl text-[8px] font-black uppercase">View</a>
                        <button onClick={() => downloadImage(file.imageUrl, file.title)} className="w-28 bg-slate-900 text-white py-3 rounded-xl text-[8px] font-black uppercase">Download</button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </main>
      </div>

      {/* UPLOAD MODAL */}
      {showUploadModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#020617]/90 backdrop-blur-md">
          <div className="bg-[#0f172a] border border-white/10 w-full max-w-lg rounded-[2.5rem] p-8 md:p-10 relative">
            <button onClick={() => setShowUploadModal(false)} className="absolute top-6 right-6 text-slate-500 hover:text-white">
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <h2 className="text-2xl font-black uppercase italic text-white mb-8">Secure New Asset</h2>
            <form onSubmit={handleUpload} className="space-y-6">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 block">Asset Title</label>
                <input name="title" type="text" required placeholder="e.g. Passport Scan" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 block">Vault Category</label>
                <select name="category" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 appearance-none">
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="bg-[#0f172a]">{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 block">Source Image</label>
                <input name="image" type="file" accept="image/*" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-[9px] file:font-black file:uppercase file:bg-indigo-600 file:text-white" />
              </div>
              <button type="submit" disabled={loading} className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-700 text-white h-16 rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all flex items-center justify-center gap-3">
                {loading ? "Encrypting..." : <><FontAwesomeIcon icon={faCloudArrowUp} /> Secure Asset</>}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;