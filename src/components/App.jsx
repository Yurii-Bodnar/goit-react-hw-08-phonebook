import { Navigate, Route, Routes } from 'react-router-dom';
import MainLoyout from './MainLayout/MainLayout';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { lazy, useEffect } from 'react';
import { refreshUser } from 'redux/Auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import LoaderSpiner from './LoaderSpiner/LoaderSpiner';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./../pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('./../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./../pages/RegisterPage/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <LoaderSpiner/>
  ) : (
    <Routes>
      <Route path="/" element={<MainLoyout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
