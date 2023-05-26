import { rest } from 'msw';
import { BOOK_LIST } from './data/books-data';
import { Book } from '../types/book';

const mockHandlers = [
  rest.get('/api/books', async (req, res, ctx) => {
    const query = req.url.searchParams.get('query')?.trim();

    if (query) {
      return res(
        ctx.json({
          books: BOOK_LIST.filter((book) =>
            bookContainsSearchQuery(book, query)
          ),
        })
      );
    }

    // Fetching all books -limited intentionally
    return res(ctx.json({ books: [...BOOK_LIST.slice(0, 5)] }));
  }),
];

// helpers

const bookContainsSearchQuery = (book: Book, searchQuery: string) => {
  let key: keyof Book;
  for (key in book) {
    if (typeof book[key] === 'string') {
      if ((book[key] as string).includes(searchQuery)) {
        return true;
      }
    }
  }

  return false;
};

export { mockHandlers };
