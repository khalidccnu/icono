import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIcons } from "../redux/icons/iconsThunks.js";

const Filter = ({ isSort, displayIcons, setDisplayIcons }) => {
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
  }, [
    icons.length,
    filterFamily.length,
    filterList.length,
    filterLicense,
    isSort,
  ]);

  useEffect(() => {
    if (displayIcons.length && filterLicense) {
      const filterIcons = displayIcons.filter(
        (icon) => icon.license === "free",
      );

      setDisplayIcons(filterIcons);
    }
  }, [displayIcons.length, filterLicense, isSort]);

  useEffect(() => {
    if (displayIcons.length && isSort) {
      const sortIcons = [...displayIcons].sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0,
      );

      setDisplayIcons(sortIcons);
    }
  }, [displayIcons.length, isSort]);

  return <></>;
};

export default Filter;
