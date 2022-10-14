import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
export const AuthNav = () => {
  return (
    <div>
      <Stack direction="row" sx={{padding: 2}} spacing={2}>
        <Button component={NavLink} to="/register" variant="contained">
          Register
        </Button>
        <Button component={NavLink} to="/login" variant="contained">
          Log in
        </Button>
      </Stack>
    </div>
  );
};
