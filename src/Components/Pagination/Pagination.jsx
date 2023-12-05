// src/components/Pagination.js
import React from "react"; 
import './Pagination.scss'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination">

      <div className="controls">
        <div className="icon">
        <i class="ri-arrow-drop-left-line icon" onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
          ></i>
          
        </div>
        <div className="page-numbers">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button key={index} onClick={() => onPageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
        <div className="icon">
        <i class="ri-arrow-drop-right-line icon"  onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}></i>
           
         
        </div>
      </div>
    </div>
  );
}

export default Pagination;
