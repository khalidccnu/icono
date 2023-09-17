import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIcons } from "../redux/icons/iconsThunks.js";

const Filter = ({ displayIcons, setDisplayIcons }) => {
  const { filterFamily, filterList, filterLicense } = useSelector(
    (store) => store.filterSlice,
  );
  const { icons } = useSelector((store) => store.iconsSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIcons());
  }, []);

  useEffect(() => {
    if (icons.length) {
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
  }, [icons.length, filterFamily.length, filterList.length, filterLicense]);

  useEffect(() => {
    if (displayIcons.length && filterLicense) {
      const filterIcons = displayIcons.filter(
        (icon) => icon.license === "free",
      );

      setDisplayIcons(filterIcons);
    }
  }, [displayIcons.length, filterLicense]);

  return <></>;
};

export default Filter;
