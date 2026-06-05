const Pagination = ({
  page,
  totalPages,
  setPage
}) => {
  return (
    <div className="flex justify-center gap-4 mt-8">

      <button
        disabled={page === 1}
        className="px-4 py-2 bg-gray-200 rounded"
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>

      <span>
        {page} / {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        className="px-4 py-2 bg-gray-200 rounded"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;