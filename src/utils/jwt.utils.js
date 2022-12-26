import jwtDecode from 'jwt-decode';
import { UserService } from '../services/user.service';
import { PATH_AUTH } from '../routes/paths';

import axios from './axios.utils'

const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }
  const decoded = jwtDecode(accessToken);

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const handleTokenExpired = (exp) => {
  let expiredTimer;

  const currentTime = Date.now();

  // Test token expires after 10s
  // const timeLeft = currentTime + 10000 - currentTime; // ~10s
  const timeLeft = exp * 1000 - currentTime;

  clearTimeout(expiredTimer);

  expiredTimer = setTimeout(async () => {
    const refresh = localStorage.getItem('refreshToken');
    const isRenewed = await renewToken(refresh);
    if (isRenewed) return;
    localStorage.clear();
    window.location.href = PATH_AUTH.login;
  }, timeLeft);
};

const renewToken = async (refresh) => {
  try {
    const newTokens = await UserService.renewToken(refresh);
    setSession(newTokens.access, newTokens.refresh);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

const setSession = (access, refresh) => {
  if (access && refresh) {
    localStorage.setItem('accessToken', access.token);
    localStorage.setItem('refreshToken', refresh.token);
    axios.defaults.headers.common.Authorization = `${access.token}`;
    const { exp } = jwtDecode(access.token);
    handleTokenExpired(exp);
  } else {
    localStorage.removeItem('accessToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

export { isValidToken, setSession, renewToken };
