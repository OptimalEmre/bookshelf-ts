import { render, screen } from '../../../test/test-utils';
import { Book } from '../../types/book';
import BookRow from './book-row';

const book: Book = {
  title: 'Voice of War',
  author: 'Zack Argyle',
  coverImageUrl:
    'https://images-na.ssl-images-amazon.com/images/I/41JodZ5Vl%2BL.jpg',
  id: 'B084F96GFZ',
  pageCount: 372,
  publisher: 'Self Published',
  synopsis:
    "Chrys Valerian is a threadweaver, a high general, and soon-to-be father. But to the people of Alchea, he is the Apogee—the man who won the war.\n\nWhen a stranger's prophecy foretells danger to Chrys' child, he must do everything in his power to protect his family—even if the most dangerous enemy is the voice in his own head.\n\nTo the west, a sheltered girl seeks to find her place in the world.\n\nTo the south, a young man's life changes after he dies.\n\nTogether, they will change the world—whether they intend to or not.",
};

describe('BookRow', () => {
  test('renders with correct information', () => {
    render(<BookRow book={book} />);
    expect(screen.getByText(/Voice of War/i)).toBeInTheDocument();
    expect(screen.getByText(/Zack Argyle/i)).toBeInTheDocument();
    expect(screen.getByText(/Self Published/i)).toBeInTheDocument();
    expect(
      (screen.getByAltText(/Voice of War book cover/i) as HTMLImageElement).src
    ).toBe(
      'https://images-na.ssl-images-amazon.com/images/I/41JodZ5Vl%2BL.jpg'
    );
    expect(
      screen.getByText(/Chrys Valerian is a threadweaver, a high general/i)
    ).toBeInTheDocument();
    // Checking if the synopsis info trims above 500 characters
    expect(
      screen.queryByText(/the world—whether they intend to or not./i)
    ).not.toBeInTheDocument();
  });
});
