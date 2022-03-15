import { useState } from "react";
import FilterDropdown from "./FilterDropdown";
import { ReactComponent as ArrowDown } from "../../../assets/svg/ArrowDown.svg";

export default function Filters(props) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterText, setFilterText] = useState("Sort by Recent");

  const handleFilterDropdown = () => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
    <div className="filters" onClick={handleFilterDropdown}>
      <p>{filterText}</p>
      <ArrowDown />
      {isFilterOpen ? <FilterDropdown setOrder={props.setOrder} setFilterText={setFilterText} /> : null}
    </div>
  );
}
