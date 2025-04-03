import { useEffect, type FC, Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { actionVerify } from './redux/actions/authActions/authActions';
import { AuthAction } from './redux/types';
import { MainPage } from './pages';
import { UserPage } from './pages/UserPage/UserPage';
import { readTokenFromLS } from './lib/local-storage';

const App: FC = () => {
  const dispatch: Dispatch<AuthAction> = useDispatch();
  const token = readTokenFromLS();

  useEffect(() => {
    if (token != null) dispatch(actionVerify());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="users/:id" element={<UserPage />}></Route>
      <Route path='*' element={<MainPage />} />
    </Routes>
  );
};

export default App;
