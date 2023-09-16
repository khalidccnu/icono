import React, { useEffect } from "react";
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
    <div className={`text-gray-500 space-y-3`}>
      <div>
        <h6 className={`uppercase font-semibold text-xs`}>Style</h6>
        <ul className={`mt-2`}>
          <li>
            <label className="label p-2 border-2 border-transparent hover:border-gray-300 rounded-lg cursor-pointer transition-colors duration-500">
              <div className={`flex items-center space-x-3`}>
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Solid</span>
              </div>
              <span>{solidIcons.length}</span>
            </label>
          </li>
          <li>
            <label className="label p-2 border-2 border-transparent hover:border-gray-300 rounded-lg cursor-pointer transition-colors duration-500">
              <div className={`flex items-center space-x-3`}>
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Regular</span>
              </div>
              <span>{regularIcons.length}</span>
            </label>
          </li>
          <li>
            <label className="label p-2 border-2 border-transparent hover:border-gray-300 rounded-lg cursor-pointer transition-colors duration-500">
              <div className={`flex items-center space-x-3`}>
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Light</span>
              </div>
              <span>{lightIcons.length}</span>
            </label>
          </li>
        </ul>
      </div>
      <div>
        <h6 className={`uppercase font-semibold text-xs`}>Categories</h6>
        <ul className={`mt-2`}>
          <li>
            <label className="label p-2 border-2 border-transparent hover:border-gray-300 rounded-lg cursor-pointer transition-colors duration-500">
              <div className={`flex items-center space-x-3`}>
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Building</span>
              </div>
              <span>{buildingCateIcons.length}</span>
            </label>
          </li>
          <li>
            <label className="label p-2 border-2 border-transparent hover:border-gray-300 rounded-lg cursor-pointer transition-colors duration-500">
              <div className={`flex items-center space-x-3`}>
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Editing</span>
              </div>
              <span>{editingCateIcons.length}</span>
            </label>
          </li>
          <li>
            <label className="label p-2 border-2 border-transparent hover:border-gray-300 rounded-lg cursor-pointer transition-colors duration-500">
              <div className={`flex items-center space-x-3`}>
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Maps</span>
              </div>
              <span>{mapsCateIcons.length}</span>
            </label>
          </li>
          <li>
            <label className="label p-2 border-2 border-transparent hover:border-gray-300 rounded-lg cursor-pointer transition-colors duration-500">
              <div className={`flex items-center space-x-3`}>
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Social</span>
              </div>
              <span>{socialCateIcons.length}</span>
            </label>
          </li>
          <li>
            <label className="label p-2 border-2 border-transparent hover:border-gray-300 rounded-lg cursor-pointer transition-colors duration-500">
              <div className={`flex items-center space-x-3`}>
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Text Formating</span>
              </div>
              <span>{textFormattingCateIcons.length}</span>
            </label>
          </li>
          <li>
            <label className="label p-2 border-2 border-transparent hover:border-gray-300 rounded-lg cursor-pointer transition-colors duration-500">
              <div className={`flex items-center space-x-3`}>
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Users + People</span>
              </div>
              <span>{usersPeopleCateIcons.length}</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
