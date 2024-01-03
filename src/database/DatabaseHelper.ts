import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { RegisterType } from '../container/register/type';
import { db, firebaseAuth } from '../firebase';
import { LoginType } from '../container/login/type';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { UserInfoType } from '../context/type';
import { UserType } from '../container/user/type';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';

export const createNewUser = async (values: RegisterType) => {
  return createUserWithEmailAndPassword(firebaseAuth, values.email, values.password)
    .then(() => {
      return Promise.resolve();
    })
    .catch((err: any) => {
      return Promise.reject(err.message || 'Something went wrong');
    });
};

export const loginUser = async (values: LoginType) => {
  return signInWithEmailAndPassword(firebaseAuth, values.email, values.password)
    .then((res: any) => {
      return Promise.resolve({
        accessToken: res.user.accessToken,
        email: res.user.email,
        photoUrl: res.user.photoURL,
        phoneNumber: res.user.phoneNumber,
        uid: res.user.uid,
        name: res.user.displayName,
      } as UserInfoType);
    })
    .catch((err) => {
      toast.error(err.message);
      return Promise.reject();
    });
};

export const handleGoogleLogin = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential) {
        const token = credential.accessToken;
        const user = result.user;
        return Promise.resolve({
          accessToken: token,
          email: user.email,
          photoUrl: user.photoURL,
          phoneNumber: user.phoneNumber,
          uid: user.uid,
          name: user.displayName,
        } as UserInfoType);
      } else {
        throw new Error('Something went wrong');
      }
    })
    .catch((error) => {
      const errorMessage = error.message;
      toast.error(errorMessage);
      return Promise.reject();
    });
};

export const addNewUser = async (value: UserType) => {
  return addDoc(collection(db, 'usersList'), {
    name: value.name,
    email: value.email,
  })
    .then(() => {
      return Promise.resolve();
    })
    .catch((err) => {
      toast.error(err.message);
      return Promise.reject(err.message);
    });
};

export const getUsersList = async () => {
  try {
    const doc_refs = await getDocs(collection(db, 'usersList'));
    const res: UserType[] = [];
    doc_refs.forEach((data: any) => {
      console.log('data', data.data());
      res.push({
        ...data.data(),
        id: data.id,
      });
    });
    return res.map((item) => ({ ...item }));
  } catch (error: any) {
    throw new Error(`Error fetching users: ${error.message}`);
  }
};
export const deleteUser = async (userId: string) => {
  try {
    await deleteDoc(doc(db, 'usersList', userId));
    return Promise.resolve();
  } catch (err: any) {
    throw new Error(err.message);
  }
};
