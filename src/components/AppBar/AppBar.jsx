import { AuthNav } from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

import Box from '@mui/material/Box';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
    </header>
  );
};
