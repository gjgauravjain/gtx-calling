import { Box, CircularProgress, Grid, Modal, ModalClose, ModalDialog } from '@mui/joy';
import { HeadingText } from '../../common/text/TextStyle';
import { useUserModal } from './hook';
import Textfield from '../../common/field/Textfield';
import { PrimaryButton, TextButton } from '../../common/button/ButtonStyle';
import { UserType } from './type';

type AddUserModalProps = {
  handleClose: () => void;
  addUerToList: (userInfo: UserType) => void;
  loading: boolean;
};

const AddUserModal = ({ handleClose, addUerToList, loading }: AddUserModalProps) => {
  const { errors, handleSubmit, setValue, addNewUser } = useUserModal(addUerToList);
  return (
    <Modal open onClose={handleClose}>
      <ModalDialog size='lg'>
        <ModalClose />
        <HeadingText size='sm'>Add New User</HeadingText>
        <Grid container>
          <Grid xs={12}>
            <Textfield
              onChange={(e) => setValue('name', e.target.value)}
              label='Enter name'
              placeholder='Enter name'
              errorMessage={errors.name?.message}
            />
          </Grid>
          <Grid xs={12} mt={'20px'}>
            <Textfield
              onChange={(e) => setValue('email', e.target.value)}
              label='Enter email'
              placeholder='Enter email'
              type='email'
              errorMessage={errors.email?.message}
            />
          </Grid>
          <Grid xs={12} mt={'20px'}>
            <Box alignItems={'center'} display={'flex'} gap={'20px'} justifyContent={'end'}>
              <Box width={'100px'}>
                <PrimaryButton
                  disabled={loading}
                  startDecorator={loading && <CircularProgress />}
                  onClick={handleSubmit(addNewUser)}
                  fullWidth
                >
                  Save
                </PrimaryButton>
              </Box>
              <Box width={'100px'}>
                <TextButton fullWidth>Cancel</TextButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ModalDialog>
    </Modal>
  );
};

export default AddUserModal;
