import React from "react";
import PropTypes from "prop-types";

export default function Pagination({ page, onChangePage}) {
  // Render page indexes
  const renderPages = () => {
    let pages = [];
    for (let i = 1; i < page?.total + 1; i++) {
      pages.push(
        <li key={i} className="page-item">
          <a className="page-link" href="#" id={i} onClick={onChange}>{i}</a>
        </li>
      );
    }
    return (pages);
  };

  // When click page num, change related products
  const onChange = (event) => {
    onChangePage(+event.target.id);
  };

  // When click previous, change to previous page
  const onPrevious = () => {
    const num = page.currentPage > 1 ? page.currentPage - 1 : 1;
    onChangePage(num);
    console.log(page);
  };

  // When click next, change to next page
  const onNext = () => {
    const num = page.currentPage < page.total ? page.currentPage + 1 : page.total;
    onChangePage(num);
    console.log(page);
  };

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" onClick={onPrevious}>Previous</a>
          </li>
          {renderPages()}
          <li className="page-item">
            <a className="page-link" href="#" onClick={onNext}>Next</a>
          </li>
        </ul>
      </nav>

    </div>
  );
}
Pagination.propTypes = {
  page: PropTypes.object,
  onChangePage: PropTypes.func.isRequired,
};