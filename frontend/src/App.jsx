import "./App.css";
import { useEffect } from "react";
import { checkBackendStatus } from "./utils/backendStatus";
import AppRoutes from "./routes/AppRoutes";

function App() {
  
  useEffect(() => {
    checkBackendStatus();
  }, []);

  return <AppRoutes />
}

export default App;