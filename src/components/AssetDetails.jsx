import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faDownload,
  faTrash,
  faEdit,
  faSave,
  faFolderOpen,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const AssetDetails = ({ file, onBack, onUpdate, onDelete, categories }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(file.title);
  const [selectedCategory, setSelectedCategory] = useState(file.category);
  const [loading, setLoading] = useState(false);
  
  const imageRef = useRef(null);
  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // --- 1. FULL SCREEN LOGIC ---
  const handleFullScreen = () => {
    if (imageRef.current) {
      if (imageRef.current.requestFullscreen) {
        imageRef.current.requestFullscreen();
      } else if (imageRef.current.webkitRequestFullscreen) {
        imageRef.current.webkitRequestFullscreen(); // Safari/Chrome support
      }
    }
  };

  // --- 2. UPDATE LOGIC ---
  const handleSave = async () => {
    if (!editedTitle.trim()) return alert("Asset identity cannot be empty");
    setLoading(true);
    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/files/update/${file._id}`, 
        { title: editedTitle, category: selectedCategory }
      );

      if (response.status === 200) {
        setIsEditing(false);
        onUpdate(); // Triggers fetchFiles in Dashboard
        alert("Asset metadata updated.");
      }
    } catch (err) {
      console.error("Update Error:", err);
      alert("Failed to update asset.");
    } finally {
      setLoading(false);
    }
  };

  // --- 3. DELETE LOGIC ---
  const handleDeleteInternal = async () => {
    if (!window.confirm("WARNING: Permanent deletion. Purge this asset from the vault?")) return;
    
    setLoading(true);
    try {
      // We call the function passed from Dashboard.jsx
      await onDelete(file._id);
    } catch (err) {
      console.error("Purge Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // --- 4. DOWNLOAD LOGIC ---
  const downloadImage = async () => {
    try {
      const res = await fetch(file.imageUrl);
      const blob = await res.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `${file.title}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      alert("Download failed.");
    }
  };

  return (
    <div className="min-h-full bg-[#020617] text-slate-300 animate-in fade-in zoom-in-95 duration-500 text-left">
      
      {/* HEADER ACTION BAR */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={onBack}
          className="h-12 w-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all text-white active:scale-95"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <div className="flex gap-3">
          <button
            onClick={handleFullScreen}
            className="h-12 px-5 bg-white/5 border border-white/10 hover:border-indigo-500/50 rounded-2xl flex items-center gap-3 font-black uppercase text-[10px] tracking-widest transition-all text-white hidden md:flex"
          >
            <FontAwesomeIcon icon={faExpand} /> Full Screen
          </button>
          
          <button
            onClick={downloadImage}
            className="h-12 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl flex items-center gap-3 font-black uppercase text-[10px] tracking-widest transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
          >
            <FontAwesomeIcon icon={faDownload} /> Download
          </button>
          
          <button
            onClick={handleDeleteInternal}
            disabled={loading}
            className="h-12 w-12 bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl flex items-center justify-center hover:bg-red-500 hover:text-white transition-all disabled:opacity-50 active:scale-95"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* ASSET PREVIEW */}
        <div className="bg-slate-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden group relative flex items-center justify-center min-h-[350px] lg:min-h-[500px]">
          <img
            ref={imageRef}
            src={file.imageUrl}
            alt={file.title}
            className="w-full h-auto object-contain max-h-[75vh] cursor-zoom-in"
            onClick={handleFullScreen}
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020617] to-transparent opacity-60 pointer-events-none"></div>
        </div>

        {/* METADATA PANEL */}
        <div className="space-y-8 flex flex-col justify-center p-2">
          <div>
            <span className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">Asset Identity</span>
            {isEditing ? (
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="w-full mt-2 bg-white/5 border border-indigo-500 rounded-2xl px-6 py-4 text-white text-xl font-bold focus:outline-none focus:ring-2 ring-indigo-500/20 transition-all"
                autoFocus
              />
            ) : (
              <h2 className="text-3xl md:text-5xl font-black italic uppercase text-white mt-2 leading-tight tracking-tighter">
                {file.title}
              </h2>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/5 p-6 rounded-3xl">
              <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest block mb-2">Vault Directory</span>
              {isEditing ? (
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              ) : (
                <div className="flex items-center gap-2 text-indigo-400">
                  <FontAwesomeIcon icon={faFolderOpen} className="text-[10px]" />
                  <span className="text-xs font-bold uppercase">{file.category}</span>
                </div>
              )}
            </div>

            <div className="bg-white/5 border border-white/5 p-6 rounded-3xl">
              <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest block mb-2">Encryption Date</span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                {new Date(file.uploadedAt || file.createdAt).toLocaleDateString('en-GB', { 
                  day: 'numeric', 
                  month: 'short', 
                  year: 'numeric' 
                })}
              </span>
            </div>
          </div>

          {/* EDIT ACTIONS */}
          <div className="pt-6">
            {isEditing ? (
              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="flex-1 h-16 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  <FontAwesomeIcon icon={faSave} /> {loading ? "Syncing..." : "Update Protocol"}
                </button>
                <button
                  onClick={() => {
                    setIsEditing(false);
                    setEditedTitle(file.title);
                    setSelectedCategory(file.category);
                  }}
                  className="px-8 h-16 bg-white/5 text-slate-400 rounded-2xl font-black uppercase text-[11px] tracking-widest hover:text-white transition-all"
                >
                  Abort
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="w-full h-16 bg-white/5 border border-white/10 hover:border-indigo-500/50 text-white rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all flex items-center justify-center gap-3 group active:scale-[0.99]"
              >
                <FontAwesomeIcon icon={faEdit} className="text-indigo-500 group-hover:scale-110 transition-transform" />
                Modify Metadata
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetDetails;