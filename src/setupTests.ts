import '@testing-library/jest-dom';

globalThis.import = {
  meta: {
    env: {
      VITE_APP_API_URL: '',
      VITE_APP_GET_USER_URL: '',
      VITE_APP_TOKEN_AUTH_URL: ''
    }
  }
};

