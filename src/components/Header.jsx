import React from "react";
import { Brands, Classic, Free, Sharp } from "./Icons.jsx";

const Header = () => {
  return (
    <header className={`bg-white pt-5`}>
      <div className="container">
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 items-center`}>
          <div className={`grid grid-cols-4 gap-4`}>
            <div
              className={`group text-center hover:text-blue-500 border border-transparent border-b-4 hover:border-b-blue-500 pb-5 cursor-pointer transition-colors duration-500`}
            >
              <Classic
                className={`fill-[#183153] group-hover:fill-blue-500 w-10 h-10 mx-auto mb-2 transition-[fill] duration-500`}
              />
              <span>Classic</span>
            </div>
            <div
              className={`group text-center hover:text-blue-500 border border-transparent border-b-4 hover:border-b-blue-500 pb-5 cursor-pointer transition-colors duration-500`}
            >
              <Sharp
                className={`fill-[#183153] group-hover:fill-blue-500 w-10 h-10 mx-auto mb-2 transition-[fill] duration-500`}
              />
              <span>Sharp</span>
            </div>
            <div
              className={`group text-center hover:text-blue-500 border border-transparent border-b-4 hover:border-b-blue-500 pb-5 cursor-pointer transition-colors duration-500`}
            >
              <Brands
                className={`fill-[#183153] group-hover:fill-blue-500 w-10 h-10 mx-auto mb-2 transition-[fill] duration-500`}
              />
              <span>Brands</span>
            </div>
            <div
              className={`group text-center hover:text-blue-500 border border-transparent border-b-4 hover:border-b-blue-500 pb-5 cursor-pointer transition-colors duration-500`}
            >
              <Free
                className={`fill-[#183153] group-hover:fill-blue-500 w-8 h-10 mx-auto mb-2 transition-[fill] duration-500`}
              />
              <span>Free</span>
            </div>
          </div>
          <div
            className={`order-first sm:order-none justify-self-center sm:justify-self-end sm:pb-5`}
          >
            <select
              name="sort"
              className="select select-md bg-white border-2 border-gray-300 rounded-xl focus:outline-0"
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
