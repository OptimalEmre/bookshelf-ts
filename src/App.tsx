import { useState } from 'react';
import { Logo } from './components/Logo';
import UserPasswordForm from './components/UserPasswordForm';
import { Modal } from '@mui/material';

type Modals = 'none' | 'login' | 'register';

const App: React.FC = () => {
  const [openModal, setOpenModal] = useState<Modals>('none');
  return (
    <div>
      <Logo width='80' height='80' />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>
      <Modal open={openModal === 'login'}>
        <>
          <button onClick={() => setOpenModal('none')}>Close</button>
          <h3>Login</h3>
          <UserPasswordForm
            onSubmit={(username, password) =>
              console.log('login: ', username, password)
            }
          />
        </>
      </Modal>
      <Modal open={openModal === 'register'}>
        <>
          <button onClick={() => setOpenModal('none')}>Close</button>
          <h3>Register</h3>
          <UserPasswordForm
            onSubmit={(username, password) =>
              console.log('register: ', username, password)
            }
          />
        </>
      </Modal>
    </div>
  );
};

export default App;
