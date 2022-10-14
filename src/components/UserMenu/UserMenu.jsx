import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operations';
import css from './UserMenu.module.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Box sx={{display:'flex',alignItems: "center",gap: 2, padding:2}}>
      <p className={css.username}>Welcome,{user.name} </p>
      <Button
        onClick={() => dispatch(logOut())}
        type="button"
        variant="outlined"
        sx={{}}
      >
        Logout
      </Button>
    </Box>
  );
};
