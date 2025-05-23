import { Lock, Unlock } from "lucide-react";

export default function LockButton({ locked, toggleLock }) {
  return (
    <button
      onClick={toggleLock}
      className={`flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-md transition-all duration-300 
        ${locked ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`}
    >
      {locked ? <Lock size={20} /> : <Unlock size={20} />}
      {locked ? "Lock Engaged" : "Unlocked - Tap to Lock"}
    </button>
  );
}
