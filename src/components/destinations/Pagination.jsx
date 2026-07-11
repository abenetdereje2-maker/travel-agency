const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border border-white/10 px-4 py-2 text-white transition hover:bg-orange-500 disabled:opacity-50"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`h-10 w-10 rounded-lg ${
            currentPage === index + 1
              ? "bg-orange-500 text-white"
              : "bg-white/10 text-white hover:bg-orange-500"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg border border-white/10 px-4 py-2 text-white transition hover:bg-orange-500 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;