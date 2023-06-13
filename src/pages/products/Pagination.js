import React from "react";
import "./Pagination.css";

const Pagination = ({ totalPages, setCurrentPage, currentPage }) => {
  const generatedPages = [];
  for (let i = 1; i <= totalPages; i++) {
    generatedPages.push(i);
  }

  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
        className="page previous"
      >
        السابق
      </button>
      {generatedPages.map((page) => (
        <div
          onClick={() => setCurrentPage(page)}
          key={page}
          className={currentPage === page ? "page active" : "page"}
        >
          {page}
        </div>
      ))}
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className="page next"
      >
        التالى
      </button>
    </div>
  );
};

export default Pagination;
