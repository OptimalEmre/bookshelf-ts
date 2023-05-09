import styled from '@emotion/styled';
import { Dialog as MuiDialog } from '@mui/material';

import * as colors from '../../styles/colors';
import * as mediaQueries from '../../styles/media-queries';

export type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  variant?: ButtonVariant;
}

const buttonVariants = {
  primary: {
    backgroundColor: colors.indigo,
    color: colors.base,
  },
  secondary: {
    backgroundColor: colors.gray,
    color: colors.text,
  },
};

const Button = styled.button<ButtonProps>(
  {
    padding: '10px 15px',
    border: '0',
    lineHeight: '1',
    borderRadius: '3px',
  },
  ({ variant = 'primary' }) => buttonVariants[variant]
);

const CircleButton = styled.button({
  borderRadius: '50%',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'white',
  color: colors.text,
  border: `1px solid ${colors.gray10}`,
  cursor: 'pointer',
});

const Input = styled.input({
  width: '100%',
  borderRadius: '3px',
  border: `1px solid ${colors.gray10}`,
  background: colors.gray,
  padding: '8px 12px',
});

const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const Dialog = styled(MuiDialog)({
  margin: '0 auto',
  paddig: '5rem',
  [mediaQueries.small]: {
    width: '100%',
    margin: '10vh auto',
  },
});

export { Button, CircleButton, Input, FormGroup, Dialog };
