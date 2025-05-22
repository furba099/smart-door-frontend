import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function NavBar() {
  const { user } = useAuth();

  return (
    <nav className="fixed bottom-0 w-full bg-gray-800 text-white flex justify-around p-4 text-sm z-10">
      <Link to="/">Dashboard</Link>
      <Link to="/users">Users</Link>
      <Link to="/logs">Logs</Link>
      {/* Only show Settings to Homeowner */}
      {user?.role === "Homeowner" && <Link to="/settings">Settings</Link>}
      <Link to="/login">Login</Link>
    </nav>
  );
}
