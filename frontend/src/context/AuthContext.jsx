import { 
  createContext, 
  useEffect, 
  useState 
} from "react";
import {
  getCurrentUser,
} from "../services/user.service";
import {
  loginUser,
  logoutUser,
} from "../services/auth.service";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (credentials) => {
    await loginUser(credentials);

    const res = await getCurrentUser();

    // setUser(res.data.data);
    setUser(res?.data?.data || null);
  };

  const logout = async () => {
    await logoutUser();

    setUser(null);
  };

  const fetchCurrentUser = async () => {
    try {
      const res = await getCurrentUser();

      setUser(res.data.data);

    } catch (error) {

      setUser(null);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {

    fetchCurrentUser();

  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};