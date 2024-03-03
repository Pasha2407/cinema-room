import css from './PageNumber.module.css';
import { IconContext } from 'react-icons';
import { MdNavigateNext } from 'react-icons/md';
import { MdNavigateBefore } from 'react-icons/md';

export const PageNumber = ({ totalPages, page, setPage }) => {
  const maxDisplayPages = 5;
  const maxTotalPages = 99;

  totalPages = Math.min(totalPages, maxTotalPages);

  const renderPageButtons = () => {
    const buttons = [];
    const halfDisplayedPages = Math.floor(maxDisplayPages / 2);
    let startPage = Math.max(1, page - halfDisplayedPages);
    let endPage = Math.min(totalPages, startPage + maxDisplayPages - 1);

    if (startPage > 1) {
      buttons.push(
        <button key={1} onClick={() => setPage(1)}>
          1
        </button>,
        <span className={css.Dots} key="dots1">
          ...
        </span>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          style={{
            backgroundColor: page === i && '#be4040',
          }}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      buttons.push(
        <span className={css.Dots} key="dots2">
          ...
        </span>,
        <button key={totalPages} onClick={() => setPage(totalPages)}>
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    totalPages > 1 && (
      <div className={css.Container}>
        <section onClick={() => setPage(Math.max(1, page - 1))}>
          <IconContext.Provider value={{ size: 40, className: `${css.Icons}` }}>
            <MdNavigateBefore />
          </IconContext.Provider>
        </section>
        <div>{renderPageButtons()}</div>
        <section onClick={() => setPage(Math.min(totalPages, page + 1))}>
          <IconContext.Provider value={{ size: 40, className: `${css.Icons}` }}>
            <MdNavigateNext />
          </IconContext.Provider>
        </section>
      </div>
    )
  );
};
