import { Avatar, Box, Grid, IconButton } from '@mui/joy';
import { useAuth } from '../../context/AuthorizationContext';
import { PrimaryBox } from '../../common/box/BoxStyle';
import { Text } from '../../common/text/TextStyle';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { OutlinedActionButton } from '../../common/button/ButtonStyle';
import AddUserModal from '../user/AddUserModal';
import { useDashboard } from './hook';
import UserList from '../user/component/UserList';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const {
    openAddNewUserModal,
    removeUserFromList,
    setOpenAddNewUserModal,
    addUserToList,
    userList,
    loading,
  } = useDashboard();
  return (
    <Grid pb={'100px'} container pt={'100px'} justifyContent={'center'}>
      <Grid xs={12} position={'absolute'} top={30} right={30}>
        <Box display={'flex'} justifyContent={'end'}>
          <IconButton title='Logout' onClick={logout}>
            <RiLogoutCircleRLine size={'30px'} />
          </IconButton>
        </Box>
      </Grid>
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
        <Box mt={'30px'}>
          <OutlinedActionButton onClick={() => setOpenAddNewUserModal(true)} fullWidth>
            Add User
          </OutlinedActionButton>
        </Box>
        <UserList removeUserFromList={removeUserFromList} userList={userList} />
        {openAddNewUserModal && (
          <AddUserModal
            loading={loading}
            addUerToList={addUserToList}
            handleClose={() => setOpenAddNewUserModal(false)}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
