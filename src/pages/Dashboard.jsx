import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LockButton from "../components/LockButton";
import FaceScanPreview from "../components/FaceScanPreview";

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

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-blue-50 p-6 font-sans">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-blue-700">Smart Lock Dashboard</h1>
            <p className="text-gray-600">
              Logged in as <strong>{user?.email}</strong> ({user?.role})
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-red-600 hover:text-red-800 underline"
          >
            Log out
          </button>
        </div>

        <div className="flex justify-center">
          <LockButton locked={isLocked} toggleLock={toggleLock} />
        </div>

        <div className="bg-gray-50 rounded-lg p-4 shadow-inner">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">Recent Activity</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-center gap-2">
              <span>🔓</span> Unlocked by Samir @ 10:42 AM
            </li>
            <li className="flex items-center gap-2">
              <span>🔒</span> Locked by Admin @ 9:30 AM
            </li>
            <li className="flex items-center gap-2">
              <span>🔓</span> Guest accessed @ 8:00 AM
            </li>
          </ul>
        </div>

        <div className="pt-4">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">Face Scan Preview</h2>
          <FaceScanPreview />
        </div>
      </div>
    </div>
  );
}
