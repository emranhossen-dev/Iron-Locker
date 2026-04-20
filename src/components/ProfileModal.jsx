import React, { useState } from "react";
import { updateProfile, updatePassword } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faUserEdit, faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import auth from "../firebase.init";

const ProfileModal = ({ user, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [newPassword, setNewPassword] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    const imageFile = e.target.photo.files[0];
    setLoading(true);

    try {
      let photoURL = user?.photoURL;

      // 1. If a new image is selected, upload to ImgBB
      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);
        const imgbbRes = await axios.post(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
          formData
        );
        if (imgbbRes.data.success) {
          photoURL = imgbbRes.data.data.url;
        }
      }

      // 2. Update Profile (Name and Photo)
      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL,
      });

      // 3. Update Password if provided
      if (newPassword.trim() !== "") {
        await updatePassword(auth.currentUser, newPassword);
      }

      alert("Profile updated successfully!");
      onClose();
      window.location.reload(); // Refresh to show changes across the app
    } catch (error) {
      console.error(error);
      alert(error.message || "Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-[#020617]/90 backdrop-blur-md">
      <div className="bg-[#0f172a] border border-white/10 w-full max-w-lg rounded-[2.5rem] p-8 md:p-10 relative">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-500 hover:text-white">
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        <h2 className="text-2xl font-black uppercase italic text-white mb-8 flex items-center gap-3">
          <FontAwesomeIcon icon={faUserEdit} className="text-indigo-500" />
          Edit Profile
        </h2>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 block">Full Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all"
            />
          </div>

          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 block">New Password (Leave blank to keep current)</label>
            <input
              type="password"
              placeholder="••••••••"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-indigo-500 transition-all"
            />
          </div>

          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2 block">Profile Picture</label>
            <input
              name="photo"
              type="file"
              accept="image/*"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-[9px] file:font-black file:uppercase file:bg-indigo-600 file:text-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-700 text-white h-16 rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all flex items-center justify-center gap-3"
          >
            {loading ? "Processing..." : <><FontAwesomeIcon icon={faCloudArrowUp} /> Save Changes</>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;