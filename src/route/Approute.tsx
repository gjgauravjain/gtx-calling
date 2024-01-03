import { Routes, Route } from 'react-router';
import { route } from './route';
import Homepage from '../container/homepage/Homepage';
import Dashboard from '../container/dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import Video from '../container/video/Video';
import Login from '../container/login/Login';
import Register from '../container/register/Register';

const Approute = () => {
  return (
    <Routes>
      <Route path={route.homepage} element={<Homepage />} />
      <Route path={route.login} element={<Login />} />
      <Route path={route.register} element={<Register />} />
      <Route
        path={route.video}
        element={
          <PrivateRoute>
            <Video />
          </PrivateRoute>
        }
      />
      <Route
        path={route.dashboard}
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Approute;
