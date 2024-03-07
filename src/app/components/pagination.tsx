import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  // Calculate startPage and endPage
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, startPage + 4);

  // Ensure endPage is at least 5 pages ahead of startPage
  if (endPage - startPage < 4) {
    startPage = Math.max(1, endPage - 4);
  }

  return (
    <div className="inline-flex rtl:space-x-reverse text-sm h-8">
      <button
        onClick={() => onPageChange && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center px-3 h-8 rounded-s-md text-white bg-gray-700 hover:bg-gray-900"
      >
        Prev
      </button>
      {[...Array(endPage - startPage + 1)].map((_, index) => (
        <button
          key={startPage + index}
          onClick={() => onPageChange && onPageChange(startPage + index)}
          className={`flex items-center justify-center px-3 h-8 text-white bg-gray-700 hover:bg-gray-900 ${
            currentPage === startPage + index ? "font-bold bg-gray-900" : ""
          }`}
        >
          {startPage + index}
        </button>
      ))}
      <button
        onClick={() => onPageChange && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center px-3 h-8 rounded-e-lg text-white bg-gray-700 hover:bg-gray-900"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
