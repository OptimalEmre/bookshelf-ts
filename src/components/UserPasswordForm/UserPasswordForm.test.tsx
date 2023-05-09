import { render, screen } from '@testing-library/react';
import UserPasswordForm from '.';

describe('UserPasswordForm', () => {
  test('renders the form correctly', () => {
    render(<UserPasswordForm onSubmit={jest.fn} buttonText='Login' />);

    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });
});
