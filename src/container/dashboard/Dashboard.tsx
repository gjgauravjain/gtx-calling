import { Avatar, Box, Grid } from '@mui/joy';
import { useAuth } from '../../context/AuthorizationContext';
import { PrimaryBox } from '../../common/box/BoxStyle';
import { Text } from '../../common/text/TextStyle';
import { PrimaryButton, OutlinedActionButton } from '../../common/button/ButtonStyle';
import { useNavigate } from 'react-router';
import { route } from '../../route/route';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <Grid container pt={'100px'} justifyContent={'center'}>
      <Grid xs={6}>
        <PrimaryBox p={'40px'}>
          <Box display={'flex'} justifyContent={'center'}>
            <Avatar sx={{ '--Avatar-size': '100px' }} src={user?.photoUrl || ''} />
          </Box>
          <Text textweight='bold' textAlign={'center'} mt={'30px'} size='md'>
            {user?.name}
          </Text>
          <Text textweight='bold' textAlign={'center'} mt={'30px'} size='md'>
            ({user?.email})
          </Text>
        </PrimaryBox>
        <Box display={'flex'} mt={'30px'} justifyContent={'center'}>
          <PrimaryButton onClick={() => navigate(route.video)}>Video Call</PrimaryButton>
        </Box>
        <Box display={'flex'} mt={'30px'} justifyContent={'center'}>
          <OutlinedActionButton onClick={logout}>Logout</OutlinedActionButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
