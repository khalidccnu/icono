import React, { useEffect } from "react";
import {
  FaCircle,
  FaHashtag,
  FaLandmark,
  FaMap,
  FaPenAlt,
  FaRegCircle,
  FaTextHeight,
} from "react-icons/fa";
import { FaCircleHalfStroke, FaPeopleGroup } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  setBuildingCateIcons,
  setEditingCateIcons,
  setLightIcons,
  setMapsCateIcons,
  setRegularIcons,
  setSocialCateIcons,
  setSolidIcons,
  setTextFormattingCateIcons,
  setUsersPeopleCateIcons,
} from "../redux/icons/iconsSlice.js";

const Sidebar = () => {
  const {
    icons,
    solidIcons,
    regularIcons,
    lightIcons,
    buildingCateIcons,
    editingCateIcons,
    mapsCateIcons,
    socialCateIcons,
    textFormattingCateIcons,
    usersPeopleCateIcons,
  } = useSelector((store) => store.iconsSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (icons.length) {
      dispatch(setSolidIcons());
      dispatch(setRegularIcons());
      dispatch(setLightIcons());
      dispatch(setBuildingCateIcons());
      dispatch(setEditingCateIcons());
      dispatch(setMapsCateIcons());
      dispatch(setSocialCateIcons());
      dispatch(setTextFormattingCateIcons());
      dispatch(setUsersPeopleCateIcons());
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
                  className="peer checkbox hidden group-hover:inline checked:inline checked:checkbox-success h-4 w-4 rounded z-10"
                />
                <div className="absolute inset-0 peer-checked:bg-blue-500"></div>
                <FaCircle
                  className={`group-hover:hidden peer-checked:hidden`}
                />
                <span className="relative label-text peer-checked:text-white ml-3">
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
                  className="peer checkbox hidden group-hover:inline checked:inline checked:checkbox-success h-4 w-4 rounded z-10"
                />
                <div className="absolute inset-0 peer-checked:bg-blue-500"></div>
                <FaCircleHalfStroke
                  className={`group-hover:hidden peer-checked:hidden`}
                />
                <span className="relative label-text peer-checked:text-white ml-3">
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
                  className="peer checkbox hidden group-hover:inline checked:inline checked:checkbox-success h-4 w-4 rounded z-10"
                />
                <div className="absolute inset-0 peer-checked:bg-blue-500"></div>
                <FaRegCircle
                  className={`group-hover:hidden peer-checked:hidden`}
                />
                <span className="relative label-text peer-checked:text-white ml-3">
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
                  className="peer checkbox hidden group-hover:inline checked:inline checked:checkbox-success h-4 w-4 rounded z-10"
                />
                <div className="absolute inset-0 peer-checked:bg-blue-500"></div>
                <FaLandmark
                  className={`group-hover:hidden peer-checked:hidden`}
                />
                <span className="relative label-text peer-checked:text-white ml-3">
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
                  className="peer checkbox hidden group-hover:inline checked:inline checked:checkbox-success h-4 w-4 rounded z-10"
                />
                <div className="absolute inset-0 peer-checked:bg-blue-500"></div>
                <FaPenAlt
                  className={`group-hover:hidden peer-checked:hidden`}
                />
                <span className="relative label-text peer-checked:text-white ml-3">
                  Editing
                </span>
                <span className={`relative ml-auto peer-checked:text-white`}>
                  {editingCateIcons.length}
                </span>
              </div>
            </label>
          </li>
          <li>
            <label className="group relative label p-2 border-2 border-transparent hover:border-gray-300 rounded-lg cursor-pointer transition-colors duration-500 overflow-hidden">
              <div className={`flex items-center w-full`}>
                <input
                  type="checkbox"
                  className="peer checkbox hidden group-hover:inline checked:inline checked:checkbox-success h-4 w-4 rounded z-10"
                />
                <div className="absolute inset-0 peer-checked:bg-blue-500"></div>
                <FaMap className={`group-hover:hidden peer-checked:hidden`} />
                <span className="relative label-text peer-checked:text-white ml-3">
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
                  className="peer checkbox hidden group-hover:inline checked:inline checked:checkbox-success h-4 w-4 rounded z-10"
                />
                <div className="absolute inset-0 peer-checked:bg-blue-500"></div>
                <FaHashtag
                  className={`group-hover:hidden peer-checked:hidden`}
                />
                <span className="relative label-text peer-checked:text-white ml-3">
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
                  className="peer checkbox hidden group-hover:inline checked:inline checked:checkbox-success h-4 w-4 rounded z-10"
                />
                <div className="absolute inset-0 peer-checked:bg-blue-500"></div>
                <FaTextHeight
                  className={`group-hover:hidden peer-checked:hidden`}
                />
                <span className="relative label-text peer-checked:text-white ml-3">
                  Text Formating
                </span>
                <span className={`relative ml-auto peer-checked:text-white`}>
                  {textFormattingCateIcons.length}
                </span>
              </div>
            </label>
          </li>
          <li>
            <label className="group relative label p-2 border-2 border-transparent hover:border-gray-300 rounded-lg cursor-pointer transition-colors duration-500 overflow-hidden">
              <div className={`flex items-center w-full`}>
                <input
                  type="checkbox"
                  className="peer checkbox hidden group-hover:inline checked:inline checked:checkbox-success h-4 w-4 rounded z-10"
                />
                <div className="absolute inset-0 peer-checked:bg-blue-500"></div>
                <FaPeopleGroup
                  className={`group-hover:hidden peer-checked:hidden`}
                />
                <span className="relative label-text peer-checked:text-white ml-3">
                  Users + People
                </span>
                <span className={`relative ml-auto peer-checked:text-white`}>
                  {usersPeopleCateIcons.length}
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
