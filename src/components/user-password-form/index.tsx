/** @jsxImportSource @emotion/react */
import { FormEvent } from 'react';
import { Button, ButtonVariant, Input } from '../lib/UI';

interface Props {
  onSubmit: (username: string, password: string) => void;
  buttonVariant?: ButtonVariant;
  buttonText?: string;
}

// const formStyles = ;

const UserPasswordForm: React.FC<Props> = ({
  onSubmit,
  buttonVariant = 'primary',
  buttonText = 'Submit',
}) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;

    onSubmit(username, password);
  };

  return (
    <div>
      <form
        css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          '> div': {
            margin: '10px auto',
            width: '100%',
            maxWidth: '300px',
          },
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor='username'>Username</label>
          <Input id='username' type='text' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <Input id='password' type='password' />
        </div>
        <div>
          <Button type='submit' variant={buttonVariant}>
            {buttonText}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserPasswordForm;
