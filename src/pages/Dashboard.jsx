import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LockButton from "../components/LockButton";
import FaceScanPreview from "../components/FaceScanPreview";
import { LogOut, Lock, Unlock } from "lucide-react";

export default function Dashboard() {
  const [isLocked, setIsLocked] = useState(true);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleLock = () => {
    setIsLocked((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const activity = [
    { icon: <Unlock className="text-green-500" size={18} />, text: "Unlocked by Samir @ 10:42 AM" },
    { icon: <Lock className="text-red-500" size={18} />, text: "Locked by Admin @ 9:30 AM" },
    { icon: <Unlock className="text-green-500" size={18} />, text: "Guest accessed @ 8:00 AM" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-50 to-blue-100 p-6 sm:p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 space-y-10 transition-all duration-300">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-800">Smart Lock Dashboard</h1>
            <p className="text-sm text-gray-600 mt-1">
              Logged in as <strong>{user?.email}</strong> ({user?.role})
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="mt-4 sm:mt-0 flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition"
          >
            <LogOut size={16} /> Log out
          </button>
        </div>

        {/* Lock Button */}
        <div className="flex justify-center">
          <LockButton locked={isLocked} toggleLock={toggleLock} />
        </div>

        {/* Activity Log */}
        <div className="bg-blue-50 rounded-xl p-6 shadow-inner">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Recent Activity</h2>
          <ul className="space-y-3">
            {activity.map((entry, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-800 text-sm">
                {entry.icon} <span>{entry.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Face Scan Preview */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Face Scan Preview</h2>
          <div className="rounded-lg border border-gray-200 p-4 bg-white shadow-sm">
            <FaceScanPreview />
          </div>
        </div>
      </div>
    </div>
  );
}
