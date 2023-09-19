import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { UserContext } from '../../utils/userContext';
import Logo from '../Logo';
import Box from '../Box';
import Button from '../Button';
import Text from '../Text';

const LoginPage: React.FunctionComponent = () => {
  const user = useContext(UserContext);
  const LinkButton = Button.withComponent('a');

  if (user?.id) {
    return <Redirect data-testid="login-redirect" to="/" />;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Logo />
        <Text sx={{ mt: 4, mb: 8 }}>{"The notes app you've been waiting for"}</Text>
        <LinkButton href="/auth/google">Sign in with Google</LinkButton>
      </Box>
    </Box>
  );
};

export default LoginPage;
