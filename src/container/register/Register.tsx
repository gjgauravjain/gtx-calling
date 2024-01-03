import { Box, CircularProgress, Grid, colors } from '@mui/joy';
import { HeadingText, Text } from '../../common/text/TextStyle';
import Textfield from '../../common/field/Textfield';
import { PrimaryButton } from '../../common/button/ButtonStyle';
import { useRegister } from './hook';
import { route } from '../../route/route';
import { PrimaryBox } from '../../common/box/BoxStyle';

const Register = () => {
  const { setValue, loading, onRegisterClick, handleSubmit, errors, navigate } = useRegister();

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
              <Textfield
                onChange={(e) => setValue('confirmPassword', e.target.value)}
                label='Enter confirm password'
                placeholder='Password'
                type='Confirm password'
                errorMessage={errors.confirmPassword?.message}
              />
            </Box>
            <Box mt={'20px'}>
              <PrimaryButton
                startDecorator={loading && <CircularProgress />}
                disabled={loading}
                onClick={handleSubmit(onRegisterClick)}
                fullWidth
              >
                Register
              </PrimaryButton>
            </Box>
            <Box mt={'20px'}>
              <Text>
                Already Have an account?{' '}
                <span
                  style={{
                    fontWeight: 900,
                    color: colors.blue[400],
                    cursor: 'pointer',
                  }}
                  onClick={() => navigate(route.login)}
                >
                  Login
                </span>
              </Text>
            </Box>
          </Box>
        </PrimaryBox>
      </Grid>
    </Grid>
  );
};

export default Register;
