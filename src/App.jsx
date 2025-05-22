import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import NavBar from "./components/NavBar";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="pb-20">
          <AppRoutes />
          <NavBar />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
