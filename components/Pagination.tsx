import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalProducts: number;
  productsPerPage: number;
  onPageChange: (pageNumber: number) => void;
  onProductsPerPageChange: (value: number) => void;
}

const Pagination = ({
  currentPage,
  totalProducts,
  productsPerPage,
  onPageChange,
  onProductsPerPageChange,
}: PaginationProps) => {
  // Calculate the total number of pages
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  // Generate an array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className='p-4 flex flex-col justify-center items-center'>
      <div>
        <span>Show: </span>
        <select value={productsPerPage} onChange={(e) => onProductsPerPageChange(Number(e.target.value))}>
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={20}>20</option>
        </select>
        <span> products per page</span>
      </div>
      <div className='flex gap-2 pt-2'>
        <button
          className='bg-primary hover:bg-secondary disabled:bg-tertiary1 rounded-md text-white px-2'
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            className='bg-primary hover:bg-secondary disabled:bg-tertiary1 rounded-md text-white px-2'
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            disabled={currentPage === pageNumber}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className='bg-primary hover:bg-secondary disabled:bg-tertiary1 rounded-md text-white px-2'
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;