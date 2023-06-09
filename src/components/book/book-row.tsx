/** @jsxImportSource @emotion/react */

import * as mediaQueries from '../../styles/media-queries';
import * as colors from '../../styles/colors';
import { Book } from '../../types/book';

interface Props {
  book: Book;
}

const BookRow: React.FC<Props> = ({ book }) => {
  const { title, author, coverImageUrl, publisher, synopsis } = book;

  const id = `book-row-book-${book.id}`;

  return (
    <article
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative',
      }}
    >
      <div
        aria-labelledby={id}
        css={{
          minHeight: 270,
          flexGrow: 2,
          display: 'grid',
          gridTemplateColumns: '140px 1fr',
          gridGap: 20,
          border: `1px solid ${colors.gray20}`,
          color: colors.text,
          padding: '1.25em',
          borderRadius: '3px',
          ':hover,:focus': {
            textDecoration: 'none',
            boxShadow: '0 5px 15px -5px rgba(0,0,0,.08)',
            color: 'inherit',
          },
        }}
      >
        <div
          css={{
            width: 140,
            [mediaQueries.small]: {
              width: 100,
            },
          }}
        >
          <img
            src={coverImageUrl}
            alt={`${title} book cover`}
            css={{ maxHeight: '100%', width: '100%' }}
          />
        </div>
        <div css={{ flex: 1 }}>
          <div css={{ display: 'flex', justifyContent: 'space-between' }}>
            <div css={{ flex: 1 }}>
              <h2
                id={id}
                css={{
                  fontSize: '1.25em',
                  margin: '0',
                  color: colors.indigo,
                }}
              >
                {title}
              </h2>
            </div>
            <div css={{ marginLeft: 10 }}>
              <div
                css={{
                  marginTop: '0.4em',
                  fontStyle: 'italic',
                  fontSize: '0.85em',
                }}
              >
                {author}
              </div>
              <small>{publisher}</small>
            </div>
          </div>
          <small css={{ whiteSpace: 'break-spaces', display: 'block' }}>
            {synopsis.substring(0, 500)}...
          </small>
        </div>
      </div>
    </article>
  );
};

export default BookRow;
