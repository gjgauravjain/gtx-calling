import { useAuth } from '../context/AuthorizationContext';
import { Navigate } from 'react-router';

type Props = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: Props) => {
  const { user, userInfoLoading } = useAuth();

  if (userInfoLoading) {
    return <h1>Loading....</h1>;
  }
  if (!user) {
    return (
      <>
        <Navigate to={'/auth'} />
      </>
    );
  }

  return <>{children}</>;
};

export default PrivateRoute;
