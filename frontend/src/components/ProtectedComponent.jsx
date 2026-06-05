import { useAuth } from "../hooks/useAuth";

const ProtectedComponent = ({ children }) => {

  const { user } = useAuth();

  if (!user) return null;

  return children;
};

export default ProtectedComponent;