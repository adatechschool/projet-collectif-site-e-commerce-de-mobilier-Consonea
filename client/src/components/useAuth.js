import { useState, useEffect } from "react";

function useAuth() {
  const [connectionStatus, setConnectionStatus] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setConnectionStatus(1);
    } else {
      setConnectionStatus(0);
    }
  }, []);

  const login = async (data) => {
    // Effectuer les actions nécessaires lors de la connexion, puis mettre à jour localStorage
    setConnectionStatus(1);
    localStorage.setItem("user", data);
  };

  const logout = () => {
    // Effectuer les actions nécessaires lors de la déconnexion, puis mettre à jour localStorage
    setConnectionStatus(0);
    localStorage.removeItem("user");
  };

  return { connectionStatus, login, logout };
}

export default useAuth;