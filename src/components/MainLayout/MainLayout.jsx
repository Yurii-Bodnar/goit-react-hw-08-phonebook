import { AppBar } from 'components/AppBar/AppBar';
import LoaderSpiner from 'components/LoaderSpiner/LoaderSpiner';
// import Navigation from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MainLoyout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<LoaderSpiner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MainLoyout;
