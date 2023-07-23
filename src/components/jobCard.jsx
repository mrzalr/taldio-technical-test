import React from "react";
import { Link } from "react-router-dom";

function jobCard(props) {
  return (
    <div className="bg-white p-6 lg:p-3 rounded-lg shadow-md flex flex-col justify-between gap-y-8 lg:w-full lg:h-fit">
      <div className="flex flex-col gap-y-4">
        <h3 className="font-semibold text-xl">{props.title}</h3>
        <p className="font-light text-sm line-clamp-2 whitespace-pre-wrap">
          {props.description}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <Link to={`/details/${props.id}`} className="font-semibold text-sm">
          View details
        </Link>
        <button className="bg-[#4192F9] py-2 px-4 text-white text-xs font-semibold rounded-lg">
          Apply
        </button>
      </div>
    </div>
  );
}

export default jobCard;
