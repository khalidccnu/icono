import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIcons } from "../redux/icons/iconsThunks.js";
import Icon from "./Icon.jsx";

const Icons = () => {
  const { icons } = useSelector((store) => store.iconsSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIcons());
  }, []);

  return (
    <div>
      <div className={`mb-5`}>
        <h3 className={`font-bold text-lg`}>{icons.length} Icons</h3>
      </div>
      <div className={`grid grid-cols-4 gap-4`}>
        {icons.map((icon) => (
          <Icon key={icon.id} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default Icons;
