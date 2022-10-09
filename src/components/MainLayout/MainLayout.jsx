import Navigation from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const MainLoyout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default MainLoyout;