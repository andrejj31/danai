import React from "react";
import ReactPaginate from "react-paginate";
import Router, { useRouter } from "next/router";

export default function Pagination({ pageCount }) {
  const router = useRouter();
  const pagginationHandler = (page) => {
    const currentPath = router.pathname;
    const currentQuery = { ...router.query };
    currentQuery.page = page.selected + 1;

    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };
  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      activeClassName={"pagination__active"}
      containerClassName={"pagination"}
      subContainerClassName={"pages pagination"}
      // initialPage={inititalPage}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={pagginationHandler}
    />
  );
}
