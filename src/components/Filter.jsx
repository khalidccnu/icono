import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIcons } from "../redux/icons/iconsThunks.js";

const Filter = ({ displayIcons, setDisplayIcons }) => {
  const [isLF, setLF] = useState(false);
  const { filterFamily, filterList, filterLicense } = useSelector(
    (store) => store.filterSlice,
  );
  const { icons } = useSelector((store) => store.iconsSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIcons());
  }, []);

  useEffect(() => {
    if (icons) {
      setDisplayIcons([]);

      if (filterFamily.length) {
        const filterIcons = icons.filter((icon) =>
          filterFamily.includes(icon.family),
        );

        if (filterList.length) {
          const nestedFilterIcons = filterIcons.filter(
            (icon) =>
              filterList.includes(icon.style) ||
              filterList.includes(icon.category),
          );

          setDisplayIcons(nestedFilterIcons);
        } else {
          setDisplayIcons(filterIcons);
        }
      } else if (filterList.length) {
        const filterIcons = icons.filter(
          (icon) =>
            filterList.includes(icon.style) ||
            filterList.includes(icon.category),
        );

        setDisplayIcons(filterIcons);
      } else {
        setDisplayIcons(icons);
      }
    }
  }, [icons, filterFamily.length, filterList.length, isLF]);

  useEffect(() => {
    if (displayIcons && filterLicense) {
      const filterIcons = displayIcons.filter(
        (icon) => icon.license === "free",
      );

      setDisplayIcons(filterIcons);
    } else {
      setLF(!isLF);
    }
  }, [displayIcons, filterLicense]);

  return <></>;
};

export default Filter;
