import ReactPaginate from "react-paginate";

export default function Footer(props) {
  const handlePagination = (e) => {
    props.setIsDataLoaded(false);
    props.setPage(e.selected + 1);
  };

  return (
    <div className="footer border-t-[2px] border-solid border-[#eaecf3] h-20 flex flex-row items-center justify-around px-10">
      <ReactPaginate
        containerClassName="pagination flex flex-row items-center justify-center gap-4 w-full"
        pageLinkClassName="pagination-btn"
        activeLinkClassName="pagination-btn-active"
        previousClassName="mr-auto"
        previousLinkClassName="navigation-btn"
        nextClassName="ml-auto"
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
