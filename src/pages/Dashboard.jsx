import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faRightFromBracket,
  faTimes,
  faHouse,
  faTableCellsLarge,
  faShieldHalved,
  faFolderOpen,
  faPlus,
  faCloudArrowUp,
  faEye,
  faArrowLeft,
  faDownload,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const { user } = useAuth();
  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // --- UI STATES ---
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [viewMode, setViewMode] = useState("all");
  const [activeFolder, setActiveFolder] = useState(null);

  // --- DATA STATES ---
  const [files, setFiles] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const categories = [
    "Academic Certificate",
    "Personal Photo",
    "Documents",
    "Professional Data",
    "Others",
  ];

  // --- FETCH LOGIC ---
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
    if (viewMode === "all") {
      fetchFiles(activeFolder);
    }
  }, [user?.email, activeFolder, viewMode]);

  // --- ACTIONS ---
  const handleLogout = () => {
    sessionStorage.removeItem("initialRedirect");
    signOut(auth);
  };

  const goToHome = () => {
    window.location.href = "/";
  };

  const resetDashboard = () => {
    setActiveFolder(null);
    setViewMode("all");
    setIsSidebarOpen(false);
  };

  const openFolderGrid = () => {
    setViewMode("grid");
    setIsSidebarOpen(false);
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

  // --- FIXED UPLOAD LOGIC ---
  const handleUpload = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const imageFile = form.image.files[0];

    if (!imageFile) return alert("Please select an image file.");

    setLoading(true);

    try {
      // 1. Upload to ImgBB
      const formData = new FormData();
      formData.append("image", imageFile);

      const imgbbRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        formData
      );

      if (imgbbRes.data.success) {
        const imageUrl = imgbbRes.data.data.url;

        // 2. Save to your Backend
        await axios.post(`${API_BASE_URL}/api/files/add`, {
          title,
          category,
          imageUrl,
          userEmail: user?.email.toLowerCase(),
        });

        setShowUploadModal(false);
        form.reset();
        fetchFiles(activeFolder);
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  const currentFiles = files.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex h-screen bg-[#020617] overflow-hidden text-slate-300 font-['Hind_Siliguri']">
      {/* SIDEBAR */}
      <aside
        className={`fixed inset-y-0 left-0 z-[100] w-72 bg-[#020617] border-r border-white/5 p-8 transition-transform duration-300 lg:translate-x-0 lg:static flex flex-col ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-12">
          <span className="text-xl font-black italic uppercase text-white">
            IRON<span className="text-indigo-500">LOCKER</span>
          </span>
          <button className="lg:hidden text-slate-500" onClick={() => setIsSidebarOpen(false)}>
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto">
          <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-4">Main Menu</p>
          <button
            onClick={resetDashboard}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold text-sm text-left transition-all ${viewMode === "all" && !activeFolder ? "bg-indigo-600/10 text-indigo-400" : "hover:bg-white/5"}`}
          >
            <FontAwesomeIcon icon={faShieldHalved} /> Dashboard
          </button>

          <button
            onClick={openFolderGrid}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold text-sm text-left transition-all ${viewMode === "grid" ? "bg-indigo-600/10 text-indigo-400" : "hover:bg-white/5"}`}
          >
            <FontAwesomeIcon icon={faTableCellsLarge} /> All Folders
          </button>

          <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest mt-8 mb-4">Quick Access</p>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => selectFolder(cat)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold text-sm text-left transition-all ${activeFolder === cat ? "bg-indigo-600/10 text-indigo-400" : "hover:bg-white/5"}`}
            >
              <FontAwesomeIcon icon={faFolderOpen} /> {cat}
            </button>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-6 w-full px-5 py-4 bg-red-500/10 text-red-500 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3"
        >
          Logout <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
      </aside>

      <div className="flex-1 flex flex-col relative min-w-0">
        <header className="h-24 flex items-center justify-between px-6 md:px-10 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl sticky top-0 z-[90]">
          <div className="flex items-center gap-5">
            <div className="relative cursor-pointer" onClick={() => setIsSidebarOpen(true)}>
              <div className="w-12 h-12 rounded-2xl overflow-hidden ring-2 ring-indigo-500/20">
                <img
                  src={user?.photoURL || "https://ui-avatars.com/api/?name=User"}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center border-2 border-[#020617] text-[8px] text-white">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest leading-none mb-1">Welcome Back,</span>
              <span className="text-white font-bold truncate max-w-[150px] block" title={user?.displayName}>
                {user?.displayName || "User"}
              </span>
            </div>
          </div>

          <button
            onClick={goToHome}
            className="px-6 py-3 bg-white/5 hover:bg-indigo-600 hover:text-white rounded-xl border border-white/10 transition-all font-black text-[10px] uppercase tracking-widest flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faHouse} /> Go to Home
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              <h1 className="text-4xl font-black italic uppercase text-white">
                {viewMode === "grid" ? "Library" : activeFolder || "Master Vault"}
              </h1>
              <button
                onClick={() => setShowUploadModal(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 h-14 rounded-2xl flex items-center justify-center gap-3 font-black uppercase text-[11px] tracking-widest transition-all"
              >
                <FontAwesomeIcon icon={faPlus} /> New Asset
              </button>
            </div>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {categories.map((cat) => (
                  <div
                    key={cat}
                    onClick={() => selectFolder(cat)}
                    className="group bg-slate-900/40 border border-white/5 p-10 rounded-[2.5rem] flex flex-col items-center cursor-pointer hover:border-indigo-500 transition-all"
                  >
                    <FontAwesomeIcon
                      icon={faFolderOpen}
                      className="text-4xl mb-4 text-indigo-500/40 group-hover:text-indigo-500"
                    />
                    <span className="text-[10px] font-black uppercase tracking-widest text-center">{cat}</span>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {activeFolder && (
                  <button
                    onClick={() => setActiveFolder(null)}
                    className="mb-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-all"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} /> Back to All Assets
                  </button>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {fetching
                    ? [1, 2, 3, 4].map((n) => (
                        <div key={n} className="h-64 bg-white/5 animate-pulse rounded-[2.5rem]"></div>
                      ))
                    : currentFiles.map((file) => (
                        <div
                          key={file._id}
                          className="group relative bg-slate-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden"
                        >
                          <div className="h-48 overflow-hidden">
                            <img
                              src={file.imageUrl}
                              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500"
                              alt={file.title}
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-sm font-bold text-white truncate uppercase mb-1">{file.title}</h3>
                            <span className="text-[8px] font-black px-2 py-0.5 bg-indigo-600/20 text-indigo-400 rounded-md uppercase">
                              {file.category}
                            </span>
                          </div>
                          <div className="absolute inset-0 bg-indigo-600/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-3 items-center justify-center backdrop-blur-[2px]">
                            <a
                              href={file.imageUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="w-32 text-center bg-white text-black py-3 rounded-xl text-[8px] font-black uppercase"
                            >
                              View
                            </a>
                            <button
                              onClick={() => downloadImage(file.imageUrl, file.title)}
                              className="w-32 bg-slate-900 text-white py-3 rounded-xl text-[8px] font-black uppercase"
                            >
                              Download
                            </button>
                          </div>
                        </div>
                      ))}
                </div>
              </>
            )}
          </div>
        </main>
      </div>

      {/* UPLOAD MODAL */}
      {showUploadModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#020617]/90 backdrop-blur-md">
          <div className="bg-[#0f172a] border border-white/10 w-full max-w-lg rounded-[2.5rem] p-10 relative">
            <button
              onClick={() => setShowUploadModal(false)}
              className="absolute top-6 right-6 text-slate-500 hover:text-white"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
            <h2 className="text-2xl font-black uppercase italic text-white mb-8">Secure New Asset</h2>
            <form onSubmit={handleUpload} className="space-y-6">
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 block">
                  Asset Title
                </label>
                <input
                  name="title"
                  type="text"
                  required
                  placeholder="e.g. Passport Scan"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all"
                />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 block">
                  Vault Category
                </label>
                <select
                  name="category"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 appearance-none transition-all"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="bg-[#0f172a]">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 block">
                  Source Image
                </label>
                <input
                  name="image"
                  type="file"
                  accept="image/*"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-black file:uppercase file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-700 text-white h-16 rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] transition-all flex items-center justify-center gap-3"
              >
                {loading ? (
                  "Encrypting & Saving..."
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCloudArrowUp} /> Secure Asset
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;