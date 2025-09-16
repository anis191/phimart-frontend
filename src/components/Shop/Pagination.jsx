// Pagination.jsx
const Pagination = ({ totalPages, currentPage, handleChange }) => {
  return (
    <div className="flex justify-center space-x-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => handleChange(i + 1)}
          className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
            currentPage === i + 1
              ? "bg-indigo-600 text-white shadow-md"
              : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
