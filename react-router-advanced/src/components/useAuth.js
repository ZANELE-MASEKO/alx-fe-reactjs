import { useState } from "react";

export const useAuth = () => {
  // Simple simulated authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return {
    isAuthenticated,
    login: () => setIsAuthenticated(true),
    logout: () => setIsAuthenticated(false),
  };
};
