
import { Puff } from  'react-loader-spinner'
const LoaderSpiner = () => {
  return (
    <Puff
      height="80"
      width="80"
      radisu={1}
      color="blue"
      ariaLabel="puff-loading"
      wrapperStyle={{
        minHheight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        minWidth: '100vh',
        marginTop: '50vh',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default LoaderSpiner;
