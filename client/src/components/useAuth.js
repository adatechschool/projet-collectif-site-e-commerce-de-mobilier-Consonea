import { useState, useEffect } from 'react';

function useAuth() {
  const [connectionStatus, setConnectionStatus] = useState(0);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user !== null) {
      setConnectionStatus(1);
    } else {
      setConnectionStatus(0);
    }
  }, []); // Le tableau de dépendances vide garantit que ce code ne s'exécutera qu'une seule fois après le montage du composant

  const login = (userData) => {
    setConnectionStatus(1);
    localStorage.setItem('user', userData);
  };

  const logout = () => {
    setConnectionStatus(0);
    localStorage.removeItem('user');
  };

  return { connectionStatus, login, logout };
}

export default useAuth;