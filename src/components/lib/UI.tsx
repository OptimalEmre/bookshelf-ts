import styled from '@emotion/styled/macro';
import { Dialog as MuiDialog, keyframes } from '@mui/material';
import { FaSpinner } from 'react-icons/fa';

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

const BookListUL = styled.ul({
  listStyle: 'none',
  padding: '0',
  display: 'grid',
  gridTemplateRows: 'repeat(auto-fill, minmax(100px, 1fr))',
  gridGap: '1em',
});

const Dialog = styled(MuiDialog)({
  margin: '0 auto',
  paddig: '5rem',
  [mediaQueries.small]: {
    width: '100%',
    margin: '10vh auto',
  },
});

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`,
});
Spinner.defaultProps = { 'aria-label': 'loading' };

export { Button, CircleButton, Input, FormGroup, BookListUL, Dialog, Spinner };
