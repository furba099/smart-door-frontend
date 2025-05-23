import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== "Homeowner") {
      alert("Access denied: Settings are for Homeowners only.");
      navigate("/");
    }
  }, [user, navigate]);

  const [faceUnlock, setFaceUnlock] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [autoLock, setAutoLock] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-blue-800">Smart Lock Settings</h1>
          <p className="text-gray-500 text-sm mt-1">Customize your security preferences</p>
        </div>

        <div className="space-y-5">
          <SettingToggle
            label="Enable Face Unlock"
            value={faceUnlock}
            onChange={() => setFaceUnlock(!faceUnlock)}
          />
          <SettingToggle
            label="Enable Two-Factor Authentication (2FA)"
            value={twoFactor}
            onChange={() => setTwoFactor(!twoFactor)}
          />
          <SettingToggle
            label="Auto-Lock After 30 Seconds"
            value={autoLock}
            onChange={() => setAutoLock(!autoLock)}
          />
        </div>
      </div>
    </div>
  );
}

// ✅ Reusable Toggle Component
function SettingToggle({ label, value, onChange }) {
  return (
    <div className="flex justify-between items-center border-b pb-3">
      <span className="text-gray-700 font-medium">{label}</span>
      <button
        onClick={onChange}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
          value ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-300 ${
            value ? "translate-x-6" : ""
          }`}
        />
      </button>
    </div>
  );
}
