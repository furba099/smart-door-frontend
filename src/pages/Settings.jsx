import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirect guests away from settings page
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
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Smart Lock Settings</h1>

      <div className="bg-white rounded shadow p-4 space-y-4 max-w-md mx-auto">
        <div className="flex justify-between items-center">
          <span>Enable Face Unlock</span>
          <input
            type="checkbox"
            checked={faceUnlock}
            onChange={() => setFaceUnlock(!faceUnlock)}
            className="w-5 h-5"
          />
        </div>

        <div className="flex justify-between items-center">
          <span>Enable Two-Factor Authentication (2FA)</span>
          <input
            type="checkbox"
            checked={twoFactor}
            onChange={() => setTwoFactor(!twoFactor)}
            className="w-5 h-5"
          />
        </div>

        <div className="flex justify-between items-center">
          <span>Auto-Lock After 30 Seconds</span>
          <input
            type="checkbox"
            checked={autoLock}
            onChange={() => setAutoLock(!autoLock)}
            className="w-5 h-5"
          />
        </div>
      </div>
    </div>
  );
}
