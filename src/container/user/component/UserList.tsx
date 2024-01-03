import React from 'react';
import { UserType } from '../type';
import { Grid, IconButton } from '@mui/joy';
import { Text } from '../../../common/text/TextStyle';
import { MdOutlineDeleteOutline } from 'react-icons/md';

type UserListProps = {
  userList: UserType[];
  removeUserFromList: (userId: string) => void;
};
const UserList = ({ userList, removeUserFromList }: UserListProps) => {
  return (
    <Grid border={'1px grey solid'} borderRadius={'20px'} container mt={'30px'}>
      <Grid xs={12}>
        <Grid
          p={'20px'}
          borderBottom={userList.length === 0 ? '' : '1px grey solid'}
          alignItems={'center'}
          container
        >
          <Grid width={'200px'}>
            <Text size='md'>Email</Text>
          </Grid>
          <Grid width={'200px'}>
            <Text size='md'>Name</Text>
          </Grid>
        </Grid>
        {userList.map((item) => (
          <Grid
            p={'20px'}
            borderTop={'1px grey solid'}
            alignItems={'center'}
            container
            key={item.name}
            sx={{
              ':hover': {
                background: '#efefef',
              },
            }}
          >
            <Grid width={'200px'}>
              <Text size='md'>{item.email}</Text>
            </Grid>
            <Grid width={'200px'}>
              <Text size='md'>{item.name}</Text>
            </Grid>
            <Grid width={'60px'}>
              <IconButton onClick={() => removeUserFromList(item.id)}>
                <MdOutlineDeleteOutline />
              </IconButton>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default UserList;
