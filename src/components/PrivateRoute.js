import { Navigate } from 'react-router-dom';
import { useAuth } from './../hooks/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
const {isAuth} = useAuth();
return isAuth ? Component : <Navigate to={redirectTo} />
};