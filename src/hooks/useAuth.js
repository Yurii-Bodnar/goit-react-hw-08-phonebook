import { useSelector } from "react-redux";
import { getIsAuth, selectIsLoading, selectIsLoggedIn, selectIsRefreshing, selectUser } from "redux/Auth/selectors";


export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUser);
    const isLoading = useSelector(selectIsLoading)
    const isAuth = useSelector(getIsAuth)
  
    return {
      isLoggedIn,
      isRefreshing,
      user,
      isLoading,
      isAuth
    };
  };