import React, { useEffect } from "react";
import {
  FaCircle,
  FaHashtag,
  FaLandmark,
  FaMap,
  FaRegCircle,
  FaSquare,
  FaTextHeight,
} from "react-icons/fa";
import { FaCircleHalfStroke, FaSquareCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setFilterList } from "../redux/filter/filterSlice.js";
import {
  setBuildingCateIcons,
  setLightIcons,
  setMapsCateIcons,
  setRegularIcons,
  setSocialCateIcons,
  setSolidIcons,
  setTextFormattingCateIcons,
} from "../redux/icons/iconsSlice.js";

const Sidebar = () => {
  const { filterList } = useSelector((store) => store.filterSlice);
  const {
    icons,
    solidIcons,
    regularIcons,
    lightIcons,
    buildingCateIcons,
    mapsCateIcons,
    socialCateIcons,
    textFormattingCateIcons,
  } = useSelector((store) => store.iconsSlice);
  const dispatch = useDispatch();

  const handleFilterList = (name) => {
    const exist = filterList.includes(name);

    if (exist) {
      const tempFilterList = filterList.filter((item) => item !== name);
      dispatch(setFilterList(tempFilterList));
    } else {
      const tempFilterList = [...filterList, name];
      dispatch(setFilterList(tempFilterList));
    }
  };

  useEffect(() => {
    if (icons.length) {
      dispatch(setSolidIcons());
      dispatch(setRegularIcons());
      dispatch(setLightIcons());
      dispatch(setBuildingCateIcons());
      dispatch(setMapsCateIcons());
      dispatch(setSocialCateIcons());
      dispatch(setTextFormattingCateIcons());
    }
  }, [icons.length]);

  return (
    <div className={`text-gray-500 space-y-5`}>
      <div>
        <h6 className={`uppercase font-semibold text-xs`}>Style</h6>
        <ul className={`mt-2`}>
          <li>
            <label className="group relative label p-2 border-2 border-transparent hover:border-gray-300 rounded-lg cursor-pointer transition-colors duration-500 overflow-hidden">
              <div className={`flex items-center w-full`}>
                <input
                  type="checkbox"
                  className="peer checkbox hidden h-4 w-4 rounded z-10"
                  onClick={() => handleFilterList("solid")}
                  checked={filterList.includes("solid") ? "checked" : null}
                />
                <div className="absolute inset-0 peer-checked:bg-blue-500"></div>
                <FaCircle
                  className={`relative group-hover:hidden peer-checked:hidden`}
                />
                <FaSquare
                  className={`relative hidden group-hover:inline peer-checked:hidden text-white stroke-gray-500 stroke-[20]`}
                />
                <FaSquareCheck
                  className={`relative hidden peer-checked:inline text-white`}
                />
                <span className="relative label-text text-gray-500 peer-checked:text-white ml-3">
                  Solid
                </span>
                <span className={`relative ml-auto peer-checked:text-white`}>
                  {solidIcons.length}
                </span>
              </div>
            </label>
          </li>
          <li>
            <label className="group relative label p-2 border-2 border-transparent hover:border-gray-300 rounded-lg cursor-pointer transition-colors duration-500 overflow-hidden">
              <div className={`flex items-center w-full`}>
                <input
                  type="checkbox"
                  className="peer checkbox hidden h-4 w-4 rounded z-10"
                  onClick={() => handleFilterList("regular")}
                  checked={filterList.includes("regular") ? "checked" : null}
                />
                <div className="absolute inset-0 peer-checked:bg-blue-500"></div>
                <FaCircleHalfStroke
                  className={`relative group-hover:hidden peer-checked:hidden`}
                />
                <FaSquare
                  className={`relative hidden group-hover:inline peer-checked:hidden text-white stroke-gray-500 stroke-[20]`}
                />
                <FaSquareCheck
                  className={`relative hidden peer-checked:inline text-white`}
                />
                <span className="relative label-text text-gray-500 peer-checked:text-white ml-3">
                  Regular
                </span>
                <span className={`relative ml-auto peer-checked:text-white`}>
                  {regularIcons.length}
                </span>
              </div>
            </label>
          </li>
          <li>
            <label className="group relative label p-2 border-2 border-transparent hover:border-gray-300 rounded-lg cursor-pointer transition-colors duration-500 overflow-hidden">
              <div className={`flex items-center w-full`}>
                <input
                  type="checkbox"
                  className="peer checkbox hidden h-4 w-4 rounded z-10"
                  onClick={() => handleFilterList("light")}
                  checked={filterList.includes("light") ? "checked" : null}
                />
                <div className="absolute inset-0 peer-checked:bg-blue-500"></div>
                <FaRegCircle
                  className={`relative group-hover:hidden peer-checked:hidden`}
                />
                <FaSquare
                  className={`relative hidden group-hover:inline peer-checked:hidden text-white stroke-gray-500 stroke-[20]`}
                />
                <FaSquareCheck
                  className={`relative hidden peer-checked:inline text-white`}
                />
                <span className="relative label-text text-gray-500 peer-checked:text-white ml-3">
                  Light
                </span>
                <span className={`relative ml-auto peer-checked:text-white`}>
                  {lightIcons.length}
                </span>
              </div>
            </label>
          </li>
        </ul>
      </div>
      <div>
        <h6 className={`uppercase font-semibold text-xs`}>Categories</h6>
        <ul className={`mt-2`}>
          <li>
            <label className="group relative label p-2 border-2 border-transparent hover:border-gray-300 rounded-lg cursor-pointer transition-colors duration-500 overflow-hidden">
              <div className={`flex items-center w-full`}>
                <input
                  type="checkbox"
                  className="peer checkbox hidden h-4 w-4 rounded z-10"
                  onClick={() => handleFilterList("building")}
                  checked={filterList.includes("building") ? "checked" : null}
                />
                <div className="absolute inset-0 peer-checked:bg-blue-500"></div>
                <FaLandmark
                  className={`relative group-hover:hidden peer-checked:hidden`}
                />
                <FaSquare
                  className={`relative hidden group-hover:inline peer-checked:hidden text-white stroke-gray-500 stroke-[20]`}
                />
                <FaSquareCheck
                  className={`relative hidden peer-checked:inline text-white`}
                />
                <span className="relative label-text text-gray-500 peer-checked:text-white ml-3">
                  Building
                </span>
                <span className={`relative ml-auto peer-checked:text-white`}>
                  {buildingCateIcons.length}
                </span>
              </div>
            </label>
          </li>
          <li>
            <label className="group relative label p-2 border-2 border-transparent hover:border-gray-300 rounded-lg cursor-pointer transition-colors duration-500 overflow-hidden">
              <div className={`flex items-center w-full`}>
                <input
                  type="checkbox"
                  className="peer checkbox hidden h-4 w-4 rounded z-10"
                  onClick={() => handleFilterList("maps")}
                  checked={filterList.includes("maps") ? "checked" : null}
                />
                <div className="absolute inset-0 peer-checked:bg-blue-500"></div>
                <FaMap
                  className={`relative group-hover:hidden peer-checked:hidden`}
                />
                <FaSquare
                  className={`relative hidden group-hover:inline peer-checked:hidden text-white stroke-gray-500 stroke-[20]`}
                />
                <FaSquareCheck
                  className={`relative hidden peer-checked:inline text-white`}
                />
                <span className="relative label-text text-gray-500 peer-checked:text-white ml-3">
                  Maps
                </span>
                <span className={`relative ml-auto peer-checked:text-white`}>
                  {mapsCateIcons.length}
                </span>
              </div>
            </label>
          </li>
          <li>
            <label className="group relative label p-2 border-2 border-transparent hover:border-gray-300 rounded-lg cursor-pointer transition-colors duration-500 overflow-hidden">
              <div className={`flex items-center w-full`}>
                <input
                  type="checkbox"
                  className="peer checkbox hidden h-4 w-4 rounded z-10"
                  onClick={() => handleFilterList("social")}
                  checked={filterList.includes("social") ? "checked" : null}
                />
                <div className="absolute inset-0 peer-checked:bg-blue-500"></div>
                <FaHashtag
                  className={`relative group-hover:hidden peer-checked:hidden`}
                />
                <FaSquare
                  className={`relative hidden group-hover:inline peer-checked:hidden text-white stroke-gray-500 stroke-[20]`}
                />
                <FaSquareCheck
                  className={`relative hidden peer-checked:inline text-white`}
                />
                <span className="relative label-text text-gray-500 peer-checked:text-white ml-3">
                  Social
                </span>
                <span className={`relative ml-auto peer-checked:text-white`}>
                  {socialCateIcons.length}
                </span>
              </div>
            </label>
          </li>
          <li>
            <label className="group relative label p-2 border-2 border-transparent hover:border-gray-300 rounded-lg cursor-pointer transition-colors duration-500 overflow-hidden">
              <div className={`flex items-center w-full`}>
                <input
                  type="checkbox"
                  className="peer checkbox hidden h-4 w-4 rounded z-10"
                  onClick={() => handleFilterList("text-formatting")}
                  checked={
                    filterList.includes("text-formatting") ? "checked" : null
                  }
                />
                <div className="absolute inset-0 peer-checked:bg-blue-500"></div>
                <FaTextHeight
                  className={`relative group-hover:hidden peer-checked:hidden`}
                />
                <FaSquare
                  className={`relative hidden group-hover:inline peer-checked:hidden text-white stroke-gray-500 stroke-[20]`}
                />
                <FaSquareCheck
                  className={`relative hidden peer-checked:inline text-white`}
                />
                <span className="relative label-text text-gray-500 peer-checked:text-white ml-3">
                  Text Formatting
                </span>
                <span className={`relative ml-auto peer-checked:text-white`}>
                  {textFormattingCateIcons.length}
                </span>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
