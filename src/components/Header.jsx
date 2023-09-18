import React, { useEffect, useState } from "react";
import { BsFilter } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterFamily,
  setFilterLicense,
} from "../redux/filter/filterSlice.js";
import { Brands, Classic, Free, Sharp } from "./FilterIcons.jsx";

const Header = ({ isFilter, setFilter, isSort, setSort }) => {
  const [family, setFamily] = useState({
    classic: false,
    sharp: false,
    brands: false,
  });
  const { filterFamily, filterLicense } = useSelector(
    (store) => store.filterSlice,
  );
  const dispatch = useDispatch();

  const changeFamily = (target) => {
    const { name, value } = target;

    setFamily((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFilterFamily = (name) => {
    const exist = filterFamily.includes(name);

    if (exist) {
      const tempFilterFamily = filterFamily.filter((item) => item !== name);
      dispatch(setFilterFamily(tempFilterFamily));
    } else {
      const tempFilterFamily = [...filterFamily, name];
      dispatch(setFilterFamily(tempFilterFamily));
    }
  };

  useEffect(() => {
    if (!filterFamily.includes("classic"))
      changeFamily({ name: "classic", value: false });
    if (!filterFamily.includes("sharp"))
      changeFamily({ name: "sharp", value: false });
    if (!filterFamily.includes("brands"))
      changeFamily({ name: "brands", value: false });
  }, [filterFamily.length]);

  return (
    <header className={`bg-white pt-10 lg:pt-5`}>
      <div className="container">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}>
          <div className={`grid grid-cols-4 gap-4`}>
            <div
              className={`group text-center hover:text-blue-500 border border-transparent border-b-4 hover:border-b-blue-500 pb-5 cursor-pointer transition-colors duration-500 ${
                family.classic && filterFamily.includes("classic")
                  ? "text-blue-500 border-b-blue-500"
                  : ""
              }`}
              onClick={() => {
                changeFamily({ name: "classic", value: !family.classic });
                handleFilterFamily("classic");
              }}
            >
              <Classic
                className={`fill-[#183153] group-hover:fill-blue-500 w-10 h-10 mx-auto mb-2 transition-[fill] duration-500 ${
                  family.classic && filterFamily.includes("classic")
                    ? "fill-blue-500"
                    : ""
                }`}
              />
              <span>Classic</span>
            </div>
            <div
              className={`group text-center hover:text-blue-500 border border-transparent border-b-4 hover:border-b-blue-500 pb-5 cursor-pointer transition-colors duration-500 ${
                family.sharp && filterFamily.includes("sharp")
                  ? "text-blue-500 border-b-blue-500"
                  : ""
              }`}
              onClick={() => {
                changeFamily({ name: "sharp", value: !family.sharp });
                handleFilterFamily("sharp");
              }}
            >
              <Sharp
                className={`fill-[#183153] group-hover:fill-blue-500 w-10 h-10 mx-auto mb-2 transition-[fill] duration-500 ${
                  family.sharp && filterFamily.includes("sharp")
                    ? "fill-blue-500"
                    : ""
                }`}
              />
              <span>Sharp</span>
            </div>
            <div
              className={`group text-center hover:text-blue-500 border border-transparent border-b-4 hover:border-b-blue-500 pb-5 cursor-pointer transition-colors duration-500 ${
                family.brands && filterFamily.includes("brands")
                  ? "text-blue-500 border-b-blue-500"
                  : ""
              }`}
              onClick={() => {
                changeFamily({ name: "brands", value: !family.brands });
                handleFilterFamily("brands");
              }}
            >
              <Brands
                className={`fill-[#183153] group-hover:fill-blue-500 w-10 h-10 mx-auto mb-2 transition-[fill] duration-500 ${
                  family.brands && filterFamily.includes("brands")
                    ? "fill-blue-500"
                    : ""
                }`}
              />
              <span>Brands</span>
            </div>
            <div
              className={`group text-center hover:text-blue-500 border border-transparent border-b-4 hover:border-b-blue-500 pb-5 cursor-pointer transition-colors duration-500 ${
                filterLicense ? "text-blue-500 border-b-blue-500" : ""
              }`}
              onClick={() => dispatch(setFilterLicense())}
            >
              <Free
                className={`fill-[#183153] group-hover:fill-blue-500 w-8 h-10 mx-auto mb-2 transition-[fill] duration-500 ${
                  filterLicense ? "fill-blue-500" : ""
                }`}
              />
              <span>Free</span>
            </div>
          </div>
          <div
            className={`flex justify-between order-first lg:order-none lg:justify-end lg:pb-5`}
          >
            <div
              className="tooltip before:bg-[#183153] before:text-white"
              data-tip="Show Filters"
            >
              <button
                className="lg:hidden btn btn-md !bg-white border-2 border-gray-100 hover:border-blue-500 text-blue-500 normal-case rounded-xl transition-colors duration-500"
                onClick={() => setFilter(!isFilter)}
              >
                <BsFilter
                  className={`text-xl ${isFilter ? "rotate-180" : ""}`}
                />
                <span>{isFilter ? "Close" : "Show"} Filters</span>
              </button>
            </div>
            <select
              name="sort"
              className="sort-select select select-md bg-white border-2 border-gray-300 rounded-xl focus:outline-0 appearance-none"
              onChange={() => setSort(!isSort)}
            >
              <option value="">Featured</option>
              <option value="">Alphabetical</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
