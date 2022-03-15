import { ReactComponent as SearchIcon } from "../../assets/svg/SearchIcon.svg";

export default function Searchbar(props) {
  const handleSearchbar = (e) => {
    props.setSearchKey(e.target.value.trim());
  };

  return (
    <div className="searchbar">
      <input type="text" onChange={handleSearchbar} placeholder="Filter by exercise title" />
      <SearchIcon className="searchbar-icon" />
    </div>
  );
}
