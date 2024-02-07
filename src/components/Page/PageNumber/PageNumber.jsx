export const PageNumber = ({ totalPages, page, setPage }) => {
  return (
    <div>
      {totalPages > 1 && (
        <>
          <span>Сторінка</span>
          {Array.from({ length: Math.min(totalPages, 25) }, (_, index) => (
            <button
              style={{
                backgroundColor: page === index + 1 ? 'red' : 'white',
              }}
              key={index + 1}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </>
      )}
    </div>
  );
};
