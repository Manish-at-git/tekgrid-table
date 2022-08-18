import * as React from "react";
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import "./Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  let ceil = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= ceil; i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: "10px",
        marginRight: "10px",
      }}
    >
      <div>
        Showing of {currentPage * postsPerPage - 1} to{" "}
        {currentPage * postsPerPage} of {totalPosts} results
      </div>
      <ul style={{ margin: 0 }} className="pagination">
        <li className="page-item">
          <span
            onClick={() => paginate(currentPage <= 0 ? 1 : currentPage - 1)}
            className="page-link"
          >
            <ArrowBackIos fontSize="sm" />
          </span>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <span
              onClick={() => paginate(number)}
              className={`page-link ${currentPage === number ? `page` : ""}`}
            >
              {number}
            </span>
          </li>
        ))}
        <li className="page-item">
          <span
            onClick={() =>
              paginate(currentPage >= ceil ? ceil : currentPage + 1)
            }
            className="page-link"
          >
            <ArrowForwardIos fontSize="sm" />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
