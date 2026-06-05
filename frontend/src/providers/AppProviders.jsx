import { AuthProvider } from "../context/AuthContext";
import ReactQueryProvider from "./ReactQueryProvider";
import { Toaster } from "react-hot-toast";


const AppProviders = ({ children }) => {

  return (

    <ReactQueryProvider>
      <AuthProvider>
        {children}
        <Toaster position='top-right' />
      </AuthProvider>
    </ReactQueryProvider>

  );
};

export default AppProviders;