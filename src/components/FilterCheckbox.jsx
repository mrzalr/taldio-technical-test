import React from "react";

function FilterCheckbox(props) {
  const OnChange = (event, filterName) => {
    if (event.target.checked) props.onAddFilter(props.filterName.toLowerCase());
    else props.onRemoveFilter(props.filterName.toLowerCase());
  };

  return (
    <div>
      <input className="mr-1" type="checkbox" onChange={OnChange} />
      <span className="text-sm">{props.filterName}</span>
    </div>
  );
}

export default FilterCheckbox;
