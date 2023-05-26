/** @jsxImportSource @emotion/react */

import { useState, useEffect, FormEventHandler } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { BookListUL, Input, Spinner } from '../lib/UI';
import { useAsync } from '../../hooks/useAsync';
import { Book } from '../../types/book';
import { client } from '../lib/api/client';
import BookRow from '../book/book-row';

interface Data {
  books: Book[];
}

interface Props {
  inputId?: string;
}

const SearchBar: React.FC<Props> = ({ inputId = 'main-search' }) => {
  const { isLoading, isSuccess, isError, data, error, run } = useAsync<Data>();
  const [query, setQuery] = useState('');
  const [queried, setQueried] = useState(false);

  const handleSearchSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setQueried(true);

    const inputElement = document.getElementById(inputId) as HTMLInputElement;

    if (!inputElement) {
      return;
    }

    const enteredText = inputElement.value.trim();

    if (enteredText) {
      setQuery(enteredText);
    }
  };

  useEffect(() => {
    if (!queried) {
      return;
    }

    run(client(`books?query=${encodeURIComponent(query)}`));
  }, [query, queried, run]);

  return (
    <div
      css={{ maxWidth: 800, margin: 'auto', width: '90vw', padding: '40px 0' }}
    >
      <form onSubmit={handleSearchSubmit}>
        <Input
          placeholder='Search books...'
          id={inputId}
          css={{
            borderRadius: '3px',
            border: '1px solid #f1f1f4',
            background: '#f1f2f7',
            padding: '8px 12px',
            width: '100%',
          }}
        />

        <label htmlFor='search'>
          <button
            type='submit'
            css={{
              border: '0',
              position: 'relative',
              marginLeft: '-35px',
              background: 'transparent',
            }}
            aria-label='start searching'
          >
            {isLoading ? (
              <Spinner />
            ) : isError ? (
              <FaTimes aria-label='error' css={{ color: 'red' }} />
            ) : (
              <FaSearch aria-label='search' />
            )}
          </button>
        </label>
      </form>
      {isError && (
        <div css={{ color: 'red' }}>
          <p>There was an error:</p>
          <pre>{(error as Error).message}</pre>
        </div>
      )}

      {isSuccess ? (
        data?.books?.length ? (
          <BookListUL css={{ marginTop: 20 }}>
            {data.books.map((book) => (
              <li key={book.id} aria-label={book.title}>
                <BookRow key={book.id} book={book} />
              </li>
            ))}
          </BookListUL>
        ) : (
          <p>No books found. Try another search.</p>
        )
      ) : null}
    </div>
  );
};

export default SearchBar;
