import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <Stack direction="row" sx={{padding: 2}} spacing={2}>
        <Button component={NavLink} to="/" end  variant="contained">
          Home
        </Button>
        {isLoggedIn && (
          <Button component={NavLink} to="/contacts" variant="contained">
            Contacts
          </Button>
        )}
      </Stack>
    </nav>
  );
};

export default Navigation;
