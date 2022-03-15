export default function FilterDropdown(props) {
  const handleFilterClick = (e) => {
    props.setOrder(e.target.dataset.filter);
    props.setFilterText(e.target.dataset.filter === "oldest_first" ? "Sort by Oldest" : "Sort by Newest");
  };

  return (
    <div className="filter-dropdown">
      <ul>
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
