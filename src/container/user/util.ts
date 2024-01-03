import { object, string } from 'yup';
import { UserType } from './type';

export const UserInfoInitialValue: UserType = {
  email: '',
  name: '',
  id: Math.random().toString(),
};

export const UserInfoValidationSchema = object().shape({
  email: string().email('Please enter valid email').required('Please enter email'),
  name: string().required('Please enter name'),
  id: string().required(),
});
