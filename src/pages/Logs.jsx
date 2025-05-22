export default function Logs() {
    const logs = [
      { id: 1, user: "Samir Tamang", action: "Unlocked", time: "10:42 AM" },
      { id: 2, user: "Guest 1", action: "Locked", time: "9:30 AM" },
      { id: 3, user: "Admin", action: "Unlocked", time: "8:00 AM" },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl font-bold mb-4">Access Logs</h1>
  
        <div className="bg-white rounded shadow p-4 space-y-3 max-w-md mx-auto">
          {logs.map((log) => (
            <div
              key={log.id}
              className="border-l-4 pl-3 py-2"
              style={{
                borderColor: log.action === "Unlocked" ? "#22c55e" : "#ef4444",
              }}
            >
              <div className="font-semibold">
                [{log.action}] {log.user}
              </div>
              <div className="text-gray-500 text-sm">{log.time}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  