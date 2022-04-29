import { useState, useCallback, useEffect } from "react";
let logoutTimer;

export const UseAuth = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token, expirationDate) => {
    // Set a token for storage.
    setToken(token);
    setUserId(uid);

    // Add a token expiration date.
    const tokenExpirationDate = expirationDate ||
      new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);

    // Add the token to storage.
    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: uid,
        token: token,
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
    // Ensure user automatically logged in.
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedData
      && storedData.token
      && new Date(storedData.expiration) > new Date()
    ) {
      login(storedData.userId, storedData.token, new Date(storedData.expiration));
    }
  }, [login]);

  return {
    token,
    login,
    logout,
    userId
  };
};
