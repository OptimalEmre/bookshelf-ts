/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Logo } from './components/logo';
import { Button } from './components/lib/UI';
import LoginDialog from './components/layout/login-dialog';
import RegisterDialog from './components/layout/register-dialog';

type Modals = 'none' | 'login' | 'register';

const App: React.FC = () => {
  const [openModal, setOpenModal] = useState<Modals>('none');

  const handleDialogClose = () => {
    setOpenModal('none');
  };

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <Logo width='80' height='80' />
      <h1>Bookshelf</h1>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gridGap: '0.75rem',
        }}
      >
        <Button onClick={() => setOpenModal('login')}>Login</Button>
        <Button variant='secondary' onClick={() => setOpenModal('register')}>
          Register
        </Button>
      </div>

      <LoginDialog
        isOpen={openModal === 'login'}
        onSubmit={(username, password) =>
          console.log('login: ', username, password)
        }
        onClose={handleDialogClose}
      />
      <RegisterDialog
        isOpen={openModal === 'register'}
        onSubmit={(username, password) =>
          console.log('register: ', username, password)
        }
        onClose={handleDialogClose}
      />
    </div>
  );
};

export default App;
