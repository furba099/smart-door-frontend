import { Lock, Unlock } from "lucide-react";

export default function Logs() {
  const logs = [
    { id: 1, user: "Samir Tamang", action: "Unlocked", time: "10:42 AM" },
    { id: 2, user: "Guest 1", action: "Locked", time: "9:30 AM" },
    { id: 3, user: "Admin", action: "Unlocked", time: "8:00 AM" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-3xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-blue-800">Access Logs</h1>

        <div className="space-y-4">
          {logs.map((log) => {
            const isUnlock = log.action === "Unlocked";
            return (
              <div
                key={log.id}
                className="flex justify-between items-center border-l-4 pl-4 pr-4 py-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition shadow-sm"
                style={{
                  borderColor: isUnlock ? "#22c55e" : "#ef4444",
                }}
              >
                <div className="flex items-center gap-3 text-sm">
                  {isUnlock ? (
                    <Unlock className="text-green-500" size={20} />
                  ) : (
                    <Lock className="text-red-500" size={20} />
                  )}
                  <div>
                    <div className="font-semibold text-gray-800">
                      {log.user}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {log.action} @ {log.time}
                    </div>
                  </div>
                </div>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    isUnlock
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {log.action}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
