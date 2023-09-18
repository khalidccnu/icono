import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterFamily,
  setFilterLicense,
  setFilterList,
} from "../redux/filter/filterSlice.js";
import Filter from "./Filter.jsx";
import Icon from "./Icon.jsx";

const Icons = ({ isSort }) => {
  const [displayIcons, setDisplayIcons] = useState([]);
  const { filterFamily, filterList, filterLicense } = useSelector(
    (store) => store.filterSlice,
  );
  const dispatch = useDispatch();

  const handleFilter = (name) => {
    const existFamily = filterFamily.includes(name);
    const existList = filterList.includes(name);

    if (existFamily) {
      const tempFilterFamily = filterFamily.filter((item) => item !== name);
      dispatch(setFilterFamily(tempFilterFamily));
    } else if (existList) {
      const tempFilterList = filterList.filter((item) => item !== name);
      dispatch(setFilterList(tempFilterList));
    } else if (name === "free") {
      dispatch(setFilterLicense());
    }
  };

  return (
    <>
      <Filter
        isSort={isSort}
        displayIcons={displayIcons}
        setDisplayIcons={setDisplayIcons}
      />
      <div>
        <div className={`flex flex-col sm:flex-row sm:items-center gap-3 mb-5`}>
          <h3 className={`font-bold text-lg whitespace-nowrap`}>
            {displayIcons.length} Icons
          </h3>
          <div className={`flex flex-wrap gap-1`}>
            {[filterFamily, filterList, filterLicense ? "free" : null]
              .flat(Infinity)
              .filter(Boolean)
              .map((name, idx) => {
                return (
                  <div
                    key={idx}
                    className="group badge bg-white text-[#183153] hover:text-blue-500 p-4 gap-2 cursor-pointer"
                    onClick={() => handleFilter(name)}
                  >
                    <span className={`uppercase font-bold text-xs`}>
                      {name}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-3 h-3 stroke-gray-500 group-hover:stroke-red-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </div>
                );
              })}
            {[filterFamily, filterList, filterLicense ? "free" : null]
              .flat(Infinity)
              .filter(Boolean).length ? (
              <div
                className="group badge bg-transparent text-[#183153] hover:text-blue-500 p-4 border-gray-300 hover:border-blue-500 gap-2 cursor-pointer"
                onClick={() => {
                  dispatch(setFilterFamily([]));
                  dispatch(setFilterList([]));
                  filterLicense ? dispatch(setFilterLicense()) : null;
                }}
              >
                <span className={`uppercase font-bold text-xs`}>Reset</span>
              </div>
            ) : null}
          </div>
        </div>
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4`}>
          {displayIcons.map((icon) => (
            <Icon key={icon.id} icon={icon} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Icons;
