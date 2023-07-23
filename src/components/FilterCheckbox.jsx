import React from "react";

function FilterCheckbox(props) {
  return (
    <div>
      <input className="mr-1" type="checkbox" />
      <span className="text-sm">{props.filterName}</span>
    </div>
  );
}

export default FilterCheckbox;
