/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Logo } from './components/logo';
import UserPasswordForm from './components/user-password-form';
import { Button, CircleButton, Dialog } from './components/lib/UI';
import { DialogContent, DialogTitle } from '@mui/material';

type Modals = 'none' | 'login' | 'register';

type MuiDialogCloseReason = 'backdropClick' | 'escapeKeyDown';

const App: React.FC = () => {
  const [openModal, setOpenModal] = useState<Modals>('none');

  const handleDialogClose = (
    event: MouseEvent,
    reason: MuiDialogCloseReason
  ) => {
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
      <Dialog
        open={openModal === 'login'}
        onClose={handleDialogClose}
        PaperProps={{ style: { padding: '1rem 1rem 3rem' } }}
      >
        <CircleButton
          onClick={() => setOpenModal('none')}
          css={{ marginLeft: 'auto' }}
        >
          &times;
        </CircleButton>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <UserPasswordForm
            onSubmit={(username, password) =>
              console.log('login: ', username, password)
            }
          />
        </DialogContent>
      </Dialog>
      <Dialog
        open={openModal === 'register'}
        onClose={handleDialogClose}
        PaperProps={{ style: { padding: '1rem 1rem 3rem' } }}
      >
        <CircleButton
          onClick={() => setOpenModal('none')}
          css={{ marginLeft: 'auto' }}
        >
          &times;
        </CircleButton>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <UserPasswordForm
            onSubmit={(username, password) =>
              console.log('register: ', username, password)
            }
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default App;
