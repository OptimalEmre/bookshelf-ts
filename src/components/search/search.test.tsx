import { render, screen, waitFor } from '../../../test/test-utils';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { mockHandlers } from '../../msw/handlers';
import SearchBar from '.';
import { act } from 'react-dom/test-utils';

const server = setupServer(...mockHandlers);
server.listen();

describe('SearchBar', () => {
  test('functions correctly', async () => {
    render(<SearchBar />);
    userEvent.type(screen.getByPlaceholderText(/Search books/i), 'Zack');
    act(() => userEvent.click(screen.getByRole('button', { name: /search/i })));
    expect(await screen.findByText(/Voice of War/i)).toBeInTheDocument();
  });
});
