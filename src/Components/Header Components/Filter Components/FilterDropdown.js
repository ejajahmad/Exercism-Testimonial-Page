export default function FilterDropdown(props) {
  const handleFilterClick = (e) => {
    props.setOrder(e.target.dataset.filter);
    props.setFilterText(e.target.dataset.filter === "oldest_first" ? "Sort by Oldest" : "Sort by Newest");
  };

  return (
    <div className="filter-dropdown min-w-[348px]  flex flex-col items-start gap-2.5 p-2 absolute top-[60px] left-0 bg-white rounded-lg z-10">
      <ul className="flex flex-col gap-2.5">
        <li>
          <button data-filter="oldest_first" onClick={handleFilterClick}>
            Sort by Oldest
          </button>
        </li>
        <li>
          <button data-filter="newest_first" onClick={handleFilterClick}>
            Sort by Newest
          </button>
        </li>
      </ul>
    </div>
  );
}
