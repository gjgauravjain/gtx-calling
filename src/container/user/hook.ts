import { useForm } from 'react-hook-form';
import { UserInfoInitialValue, UserInfoValidationSchema } from './util';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserType } from './type';

export const useUserModal = (addUserToList: (userInfo: UserType) => void) => {
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: UserInfoInitialValue,
    reValidateMode: 'onBlur',
    resolver: yupResolver(UserInfoValidationSchema),
  });

  const addNewUser = (value: UserType) => {
    addUserToList(value);
  };

  return {
    handleSubmit,
    setValue,
    errors,
    addNewUser,
  };
};
