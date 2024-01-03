import { ToastContainer } from 'react-toastify';
import Approute from './route/Approute';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthorizationContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer />
        <Approute />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
