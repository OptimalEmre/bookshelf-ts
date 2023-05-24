import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { CircleButton } from '../lib/UI';
import UserPasswordForm from '../user-password-form';

type MuiDialogCloseReason = 'backdropClick' | 'escapeKeyDown';

interface Props {
  isOpen: boolean;
  onSubmit: (username: string, password: string) => void;
  onClose: (event?: MouseEvent, reason?: MuiDialogCloseReason) => void;
}

const LoginDialog: React.FC<Props> = ({ isOpen, onSubmit, onClose }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => onClose()}
      PaperProps={{ style: { padding: '1rem 1rem 3rem' } }}
    >
      <CircleButton onClick={() => onClose()} css={{ marginLeft: 'auto' }}>
        &times;
      </CircleButton>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <UserPasswordForm
          onSubmit={(username, password) => onSubmit(username, password)}
        />
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
