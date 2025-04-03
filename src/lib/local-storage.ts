import { TOKEN } from '../redux/constants';
import * as locales from '../locales/en.json';

export const readTokenFromLS = () => {
  try {
    return localStorage.getItem(TOKEN);
  } catch {
    return null;
  }
};

export const writeTokenFromLS = (token: string) => {
  try {
    localStorage.setItem(TOKEN, token);
  } catch {
    return locales.TOKEN_ERROR_WR_LS;
  }
};

export const removeTokenFromLS = () => {
  try {
    localStorage.removeItem(TOKEN);
  } catch {
    return locales.TOKEN_ERROR_RM_LS;
  }
};
