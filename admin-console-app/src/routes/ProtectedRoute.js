import { Navigate } from "react-router-dom";

import useSecurity from "../hooks/useSecurity";

// 导航守护
export const ProtectedRoute = ({ children }) => {
  const { isLogin } = useSecurity();

  if (!isLogin()) {
    return <Navigate to="/" />;
  }
  return children;
};
