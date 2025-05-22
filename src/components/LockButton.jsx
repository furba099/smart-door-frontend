export default function LockButton({ locked, toggleLock }) {
    return (
      <button
        onClick={toggleLock}
        className={`rounded-full w-40 h-40 text-white text-xl font-bold shadow-xl transition ${
          locked ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {locked ? "🔒 Locked" : "🔓 Unlocked"}
      </button>
    );
  }
  