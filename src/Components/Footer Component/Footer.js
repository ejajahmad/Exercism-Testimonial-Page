import ReactPaginate from "react-paginate";

export default function Footer(props) {
  const handlePagination = (e) => {
    props.setIsDataLoaded(false);
    props.setPage(e.selected + 1);
  };

  return (
    <div className="footer">
      <ReactPaginate
        containerClassName="pagination"
        pageLinkClassName="pagination-btn"
        activeLinkClassName="pagination-btn-active"
        previousLinkClassName="navigation-btn"
        nextLinkClassName="navigation-btn"
        disabledLinkClassName="navigation-btn-disabled"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePagination}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={Math.ceil(props.totalPage)}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
}
