import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBars, faRightFromBracket, faTimes, 
  faShieldHalved, faFolderOpen, faPlus, faChartPie, faCloudArrowUp, faEye
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const { user } = useAuth();
  const API_BASE_URL = import.meta.env.VITE_API_URL;
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  // --- FETCH FROM LIVE BACKEND ---
  const fetchFiles = async () => {
    if (!user?.email) return;
    try {
      setFetching(true);
      const res = await axios.get(`${API_BASE_URL}/api/files/user/${user.email}`);
      setFiles(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, [user?.email, API_BASE_URL]);

  const handleLogout = () => signOut(auth);

  // --- UPLOAD TO IMGBB & LIVE BACKEND ---
  const handleUpload = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const imageFile = form.image.files[0];

    if (!imageFile) return alert("Select a file.");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      const imgbbKey = import.meta.env.VITE_IMGBB_API_KEY;
      const imgbbRes = await axios.post(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, formData);

      if (imgbbRes.data.success) {
        const fileMetadata = { 
          title, 
          category, 
          imageUrl: imgbbRes.data.data.url, 
          userEmail: user?.email 
        };
        
        const serverRes = await axios.post(`${API_BASE_URL}/api/files/add`, fileMetadata);
        
        if (serverRes.data) {
          setShowUploadModal(false);
          form.reset();
          fetchFiles(); 
        }
      }
    } catch (error) {
      alert("Locker Sync Failed. Check if the server is live.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-[#020617] overflow-hidden text-slate-300 font-['Hind_Siliguri']">
      
      {/* SIDEBAR */}
      <aside className={`fixed inset-y-0 left-0 z-[100] w-72 bg-[#020617] border-r border-white/5 p-8 transition-transform duration-300 lg:translate-x-0 lg:static ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between items-center mb-12">
          <span className="text-xl font-black italic uppercase tracking-tighter text-white">IRON<span className="text-indigo-500">LOCKER.</span></span>
          <button className="lg:hidden text-slate-500" onClick={() => setIsSidebarOpen(false)}><FontAwesomeIcon icon={faTimes} size="lg"/></button>
        </div>
        <nav className="space-y-2">
          <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-4">Storage</p>
          <button className="w-full flex items-center gap-4 px-4 py-3 bg-indigo-600/10 text-indigo-400 rounded-2xl font-bold text-sm text-left"><FontAwesomeIcon icon={faShieldHalved} /> My Vault</button>
          <button className="w-full flex items-center gap-4 px-4 py-3 hover:bg-white/5 hover:text-white rounded-2xl font-bold text-sm transition-all text-left"><FontAwesomeIcon icon={faChartPie} /> Analytics</button>
          <button className="w-full flex items-center gap-4 px-4 py-3 hover:bg-white/5 hover:text-white rounded-2xl font-bold text-sm transition-all text-left"><FontAwesomeIcon icon={faFolderOpen} /> Folders</button>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col relative min-w-0">
        
        {/* HEADER */}
        <header className="h-24 flex items-center justify-between px-6 md:px-10 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl sticky top-0 z-[90]">
          <div className="flex items-center gap-5">
            <div className="relative cursor-pointer" onClick={() => setIsSidebarOpen(true)}>
              <div className="w-12 h-12 rounded-2xl overflow-hidden ring-2 ring-indigo-500/20">
                <img src={user?.photoURL || "https://ui-avatars.com/api/?name=User"} alt="profile" className="w-full h-full object-cover"/>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center border-2 border-[#020617] text-[8px] text-white">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest leading-none mb-1">Encrypted Access</span>
              <span className="text-white font-bold">{user?.displayName?.split(" ")[0] || "User"}</span>
            </div>
          </div>
          <button onClick={handleLogout} className="px-5 py-2.5 bg-white/5 hover:bg-red-500/10 hover:text-red-500 rounded-xl border border-white/5 transition-all font-bold text-[10px] uppercase tracking-widest group flex items-center gap-2">
            Logout <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
          <div className="max-w-7xl mx-auto">
             
             {/* MY LOCKER HEADER */}
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                    <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white">My Locker</h1>
                    <p className="text-slate-500 text-sm mt-1">Sync status: <span className="text-green-500 font-bold">Online</span></p>
                </div>
                <button 
                  onClick={() => setShowUploadModal(true)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 h-14 rounded-2xl flex items-center justify-center gap-3 font-black uppercase text-[11px] tracking-widest transition-all shadow-xl shadow-indigo-600/20"
                >
                  <FontAwesomeIcon icon={faPlus} /> Upload File
                </button>
             </div>
             
             {/* FILE GRID */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {fetching ? (
                  [1, 2, 3, 4].map(n => <div key={n} className="h-64 bg-white/5 animate-pulse rounded-[2.5rem] border border-white/5"></div>)
                ) : files.length > 0 ? (
                  files.map((file) => (
                    <div key={file._id} className="group relative bg-slate-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-indigo-500/50 transition-all duration-500 shadow-2xl">
                      <div className="absolute top-5 left-5 z-10">
                        <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[8px] font-black uppercase tracking-widest text-indigo-400">{file.category}</span>
                      </div>
                      <div className="h-48 overflow-hidden relative">
                        <img src={file.imageUrl} alt={file.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-sm font-bold text-white truncate uppercase tracking-tight mb-1">{file.title}</h3>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{new Date(file.uploadedAt).toLocaleDateString()}</p>
                      </div>
                      <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                           <a href={file.imageUrl} target="_blank" rel="noreferrer" className="bg-white text-black px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform"><FontAwesomeIcon icon={faEye} className="mr-2" /> View Asset</a>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full h-64 bg-white/5 border border-white/5 border-dashed rounded-[3rem] flex flex-col items-center justify-center gap-4 text-slate-600">
                    <FontAwesomeIcon icon={faShieldHalved} size="3xl" className="opacity-10" />
                    <p className="font-bold italic uppercase tracking-widest text-[10px]">Vault instance is empty</p>
                  </div>
                )}
             </div>
          </div>
        </main>

        {/* MODAL */}
        {showUploadModal && (
          <div className="fixed inset-0 bg-[#020617]/90 backdrop-blur-md z-[110] flex items-center justify-center p-6">
            <div className="bg-slate-900 w-full max-w-lg p-10 rounded-[3rem] border border-white/10 shadow-2xl relative">
              <button onClick={() => setShowUploadModal(false)} className="absolute top-8 right-8 text-slate-500 hover:text-white"><FontAwesomeIcon icon={faTimes} size="lg" /></button>
              
              <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-indigo-600/20 rounded-2xl flex items-center justify-center text-indigo-500"><FontAwesomeIcon icon={faCloudArrowUp} size="xl" /></div>
                  <div>
                    <h2 className="text-xl font-black text-white uppercase italic">Secure Sync</h2>
                    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mt-1">Initialize Upload</p>
                  </div>
              </div>
              
              <form onSubmit={handleUpload} className="space-y-6">
                <div>
                  <label className="text-[10px] font-black uppercase text-indigo-500/70 ml-2 mb-1 block tracking-widest">Title</label>
                  <input name="title" type="text" placeholder="e.g. PASSPORT_MAIN" required className="w-full bg-white/5 border border-white/10 focus:border-indigo-500 rounded-2xl px-5 h-14 text-sm text-white outline-none" />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-indigo-500/70 ml-2 mb-1 block tracking-widest">Classification</label>
                  <select name="category" required className="w-full bg-white/5 border border-white/10 focus:border-indigo-500 rounded-2xl px-5 h-14 text-sm text-slate-400 outline-none">
                    <option value="NID">NID / Passport</option>
                    <option value="Academic">Academic Certificate</option>
                    <option value="Personal">Personal Data</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-indigo-500/70 ml-2 mb-1 block tracking-widest">File</label>
                  <input name="image" type="file" accept="image/*" required className="block w-full text-[10px] text-slate-500 file:mr-4 file:py-4 file:px-6 file:rounded-2xl file:border-0 file:font-black file:uppercase file:bg-indigo-600/10 file:text-indigo-400 bg-white/5 rounded-2xl border border-white/10 h-14" />
                </div>
                <button disabled={loading} className="w-full h-16 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-800 text-white rounded-2xl font-black uppercase text-[11px] tracking-[0.3em] transition-all">
                  {loading ? "Encrypting..." : "Initialize Lock"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;