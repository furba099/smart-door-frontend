import { useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "Samir Tamang", role: "Homeowner" },
    { id: 2, name: "Guest 1", role: "Guest" },
  ]);

  const [newUser, setNewUser] = useState("");

  const addUser = () => {
    if (newUser.trim() === "") return;

    const id = users.length + 1;
    setUsers([...users, { id, name: newUser, role: "Guest" }]);
    setNewUser("");
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Users</h1>

      <div className="mb-4">
        <input
          type="text"
          className="border p-2 mr-2 rounded w-64"
          placeholder="Enter guest name"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button
          onClick={addUser}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Guest
        </button>
      </div>

      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <span>
              <strong>{user.name}</strong> ({user.role})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
