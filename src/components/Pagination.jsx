import React from 'react'
import './Pagination.css'
export default function Pagination({dataPerPage, totalData, paginate, currentPage}) {

    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(totalData/dataPerPage); i++)
    {
        pageNumbers.push(i);
    }
  return (
    <div>
        <ul className='pagination'>
            {pageNumbers.map(number=>(
                <li key={number} className='pagination'  >                    
                    <button onClick={() => paginate(number)}  className={currentPage===number ? "active" : ""}>                        
                        {number}
                    </button>
                </li>
            ))}
        </ul>

    </div>
  )
}
