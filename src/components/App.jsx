import { Navigate, Route, Routes } from 'react-router-dom';
import MainLoyout from './MainLayout/MainLayout';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';
import { HomePage } from 'pages/HomePage/HomePage';

export const App = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<MainLoyout/>}>
    <Route index element={<HomePage />} />
    <Route path='/register' element={<RegisterPage/>} />
    <Route path='/login' element={<LoginPage/>} />
    <Route path='/contacts' element={<ContactsPage/>} />
    <Route path="*" element={<Navigate to="/" />} />
    </Route>
      </Routes>
    </>
  );
};
