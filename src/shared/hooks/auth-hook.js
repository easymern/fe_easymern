import { useState, useCallback, useEffect } from "react";
let logoutTimer;

export const useAuth = () => {
  const API_URL = "http://localhost:3001/api-v1/auth/";
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);
  const [email, setEmail] = useState(undefined);
  const [roles, setRoles] = useState([]);
  const [username, setUsername] = useState(undefined)


  const login = useCallback((uid, token, email, roles, username, expirationDate) => {
    // Set a token for storage.
    setToken(token);
    setUserId(uid);
    setEmail(email);
    setRoles(roles);

    let tempExpDate = typeof expirationDate;
    tempExpDate = tempExpDate ? expirationDate : tempExpDate;

    // Add a token expiration date.
    const tokenExpirationDate = tempExpDate ||
      new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);

    // Add the token to storage.
    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: uid,
        token: token,
        email: email,
        roles: roles,
        username: username,
        expiration: tokenExpirationDate.toISOString()
      })
    );
  }, []);
  
  const logout = useCallback(() => {
    // reset states and remove token.
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem('userData');
  }, [])

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    // Ensure user automatically logged in.
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedData
      && storedData.token
      && new Date(storedData.expiration) > new Date()
    ) {
      login(
        storedData.userId,
        storedData.token,
        storedData.email,
        storedData.roles,
        storedData.username,
        new Date(storedData.expiration)
      );
    }
  }, [login]);

  return {
    token,
    login,
    logout,
    userId
  };
};
