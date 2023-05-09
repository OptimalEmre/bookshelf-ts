import { FormEvent } from 'react';

interface Props {
  onSubmit: (username: string, password: string) => void;
  buttonText?: string;
}

const UserPasswordForm: React.FC<Props> = ({
  onSubmit,
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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' />
        </div>
        <button type='submit'>{buttonText}</button>
      </form>
    </div>
  );
};

export default UserPasswordForm;
