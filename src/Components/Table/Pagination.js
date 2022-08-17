import * as React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginLeft: "10px",
        marginRight: "10px",
      }}
    >
      <ul style={{ margin: 0 }} className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <span onClick={() => paginate(number)} className="page-link">
              {number}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
