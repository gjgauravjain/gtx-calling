import { Box, CircularProgress, Grid, colors } from '@mui/joy';
import { HeadingText, Text } from '../../common/text/TextStyle';
import Textfield from '../../common/field/Textfield';
import { PrimaryButton, OutlinedActionButton } from '../../common/button/ButtonStyle';
import { FaGooglePlus } from 'react-icons/fa';
import { useLogin } from './hook';
import { route } from '../../route/route';
import { PrimaryBox } from '../../common/box/BoxStyle';

const Login = () => {
  const { setValue, loading, loginByGoogle, onLoginClick, handleSubmit, errors, navigate } =
    useLogin();
  return (
    <Grid container justifyContent={'center'}>
      <Grid xs={5}>
        <PrimaryBox mt={'50px'} p={'40px'}>
          <Box>
            <HeadingText textAlign={'center'} size='md'>
              GTx Calling App
            </HeadingText>
            <Box mt={'20px'}>
              <Textfield
                onChange={(e) => setValue('email', e.target.value)}
                label='Enter email'
                placeholder='Email'
                type='email'
                errorMessage={errors.email?.message}
              />
            </Box>
            <Box mt={'20px'}>
              <Textfield
                onChange={(e) => setValue('password', e.target.value)}
                label='Enter password'
                placeholder='Password'
                type='password'
                errorMessage={errors.password?.message}
              />
            </Box>
            <Box mt={'20px'}>
              <PrimaryButton
                disabled={loading}
                startDecorator={loading && <CircularProgress />}
                onClick={handleSubmit(onLoginClick)}
                fullWidth
              >
                Login
              </PrimaryButton>
            </Box>
            <Box mt={'20px'}>
              <Text>
                Don't Have an account?{' '}
                <span
                  onClick={() => navigate(route.register)}
                  style={{
                    fontWeight: 900,
                    color: colors.blue[400],
                    cursor: 'pointer',
                  }}
                >
                  Register
                </span>
              </Text>
            </Box>
            <Box display={'flex'} gap={'20px'} alignItems={'center'}>
              <Box width={'100%'} height={'2px'} bgcolor={colors.grey[400]} />
              <HeadingText size='xs'>OR</HeadingText>
              <Box width={'100%'} height={'2px'} bgcolor={colors.grey[400]} />
            </Box>
            <Box display={'flex'} justifyContent={'center'}>
              <OutlinedActionButton
                onClick={loginByGoogle}
                startDecorator={<FaGooglePlus size={'30px'} />}
                fullWidth
              >
                Login with Google
              </OutlinedActionButton>
            </Box>
          </Box>
        </PrimaryBox>
      </Grid>
    </Grid>
  );
};

export default Login;
