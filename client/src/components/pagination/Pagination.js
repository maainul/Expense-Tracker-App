import React from 'react'

const Pagination = ({ numberOfPage, setPage }) => {
    const pages = []
    for (let i = 1; i <= numberOfPage; i++) {
        pages.push(<span key={i} className="paginationNumber" onClick={() => setPage(i)}>{i}</span>)
    }
    return (
        <div className="pagination-container">
            <span className="paginationNumber"> <i class='pagination-icon bx bx-chevrons-left'></i></span>
            {pages}
            <span className="paginationNumber"><i class='pagination-icon bx bx-chevrons-right'></i> </span>
        </div>
    )
}

// prev 
// next 
export default Pagination