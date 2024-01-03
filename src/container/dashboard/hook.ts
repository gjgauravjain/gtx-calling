import { useEffect, useState } from 'react';
import { UserType } from '../user/type';
import { addNewUser, deleteUser, getUsersList } from '../../database/DatabaseHelper';
import { toast } from 'react-toastify';

export const useDashboard = () => {
  const [openAddNewUserModal, setOpenAddNewUserModal] = useState(false);
  const [userList, setUserList] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(false);

  const addUserToList = (userInfo: UserType) => {
    setLoading(true);
    addNewUser(userInfo)
      .then(() => {
        fetchUserList();
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error('Something went wrong');
      })
      .finally(() => {
        setOpenAddNewUserModal(false);
      });
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = () => {
    getUsersList()
      .then((res) => {
        setUserList(res);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const removeUserFromList = (userId: string) => {
    deleteUser(userId)
      .then(() => {
        fetchUserList();
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return {
    openAddNewUserModal,
    setOpenAddNewUserModal,
    userList,
    setUserList,
    addUserToList,
    removeUserFromList,
    setLoading,
    loading,
  };
};
