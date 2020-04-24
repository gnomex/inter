import React from 'react';

const Pagination = ({ prevPage, nextPage, pagination }) => {
  return (
    <div className="container">
      <nav aria-label="Páginas disponíveis" className="float-right">
        <p>Mostrando página {pagination.page} de {pagination.total_pages} </p>

        <button type="button" className="btn btn-outline-primary px-1" disabled={pagination.page === 1} onClick={ prevPage }> Prev Page </button>

        <button type="button" className="btn btn-outline-primary" disabled={pagination.page === pagination.total_pages} onClick={ nextPage }> Next Page </button>
      </nav>
    </div>
  )
}

export default Pagination;
