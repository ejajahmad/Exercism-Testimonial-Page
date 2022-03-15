import { ReactComponent as SearchIcon } from "../../assets/svg/SearchIcon.svg";

export default function Searchbar(props) {
  const handleSearchbar = (e) => {
    props.setSearchKey(e.target.value.trim());
  };

  return (
    <div className="searchbar  relative flex flex-row items-center">
      <input
        className="py=[12px] px-[21px] w-[416px] flex flex-row items-center pl-20 h-12 bg-gray-200 rounded absolute border-none outline-none focus:box-border focus:rounded focus:border-[1px] focus:border-solid focus:border-[#2e57e8]"
        type="text"
        onChange={handleSearchbar}
        placeholder="Filter by exercise title"
      />
      <SearchIcon className="searchbar-icon absolute left-[25px]" />
    </div>
  );
}
