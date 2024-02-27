import React from "react";
import PropTypes from "prop-types";

export default function Pagination({ cartPage, onChangePage}) {
  // Render page indexes
  const renderPages = () => {
    let pages = [];
    for (let i = 1; i < cartPage.total + 1; i++) {
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
    onChangePage(event.target.id);
  };

  // When click previous, change to previous page
  const onPrevious = () => {
    const num = cartPage.currentPage > 1 ? cartPage.currentPage - 1 : 1;
    onChangePage(num);
    console.log(cartPage);
  };

  // When click next, change to next page
  const onNext = () => {
    const num = cartPage.currentPage < cartPage.total ? cartPage.currentPage + 1 : cartPage.total;
    onChangePage(num);
    console.log(cartPage);
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
  cartPage: PropTypes.object.isRequired,
  onChangePage: PropTypes.func.isRequired,
};