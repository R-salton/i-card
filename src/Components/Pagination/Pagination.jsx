// src/components/Pagination.js
import React from "react"; 
import './Pagination.scss'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Pagination({totalPages, modulesPerpage,currentPage,handlePageChange}) {
const pages = []

// console.log(totalPages);

const getPage = (page)=>{
  console.log(page)
  handlePageChange(page)
  
}



for(let i =1; i <= totalPages; i++){
  pages.push(i)
}

console.log(pages);

// Next Functionality

const handleNextPage = ()=>{
  const newPage = currentPage + 1;

  if(newPage <= totalPages){

    handlePageChange(newPage);
  }
}
 
// Previous Functionality

const handlePreviousPage = () => {
  const previousPage = currentPage - 1;
  if (previousPage >= 1) {
    handlePageChange(previousPage);
  }
};
 
  return (
    <div className="pagination">

      <div className="controls">
        <div className="icon">
        <i class="ri-arrow-drop-left-line icon" onClick={handlePreviousPage}></i> 
          
        </div>
        <div className="page-numbers">
          {pages.map((page, index) => { return(
            <button key={index} style={{backgroundColor: currentPage === page ? 'var(--light-gray)' : '', color: 'var(--primary-color)'}} onClick={() => getPage(page)}>
              {page}
            </button>
          )})}
        </div>
        
        <div className="icon"  >
        <i class="ri-arrow-drop-right-line icon"  onClick={handleNextPage} />
           
         
        </div>
      </div>
    </div>
  );
}

export default Pagination;
