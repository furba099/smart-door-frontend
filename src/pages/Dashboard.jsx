import { useState } from "react";
import LockButton from "../components/LockButton";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const [isLocked, setIsLocked] = useState(true);
  const { user } = useAuth();

  const toggleLock = () => {
    setIsLocked((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-2">
        Smart Lock Dashboard
      </h1>

      {/* Show logged-in user info */}
      <h2 className="text-lg text-center mb-6 text-gray-600">
        Logged in as: <strong>{user?.email}</strong> ({user?.role})
      </h2>

      <div className="flex justify-center my-10">
        <LockButton locked={isLocked} toggleLock={toggleLock} />
      </div>

      <div className="bg-white max-w-md mx-auto p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>🔓 Unlocked by Samir @ 10:42 AM</li>
          <li>🔒 Locked by Admin @ 9:30 AM</li>
          <li>🔓 Guest accessed @ 8:00 AM</li>
        </ul>
      </div>
    </div>
  );
}
