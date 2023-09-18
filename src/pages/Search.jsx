import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Icons from "../components/Icons.jsx";

const Search = () => {
  const [isFilter, setFilter] = useState(false);
  const [isSort, setSort] = useState(false);

  const handleResize = () => {
    if (innerWidth >= 1024) setFilter(true);
    else setFilter(false);
  };

  useEffect(() => {
    handleResize();

    addEventListener("resize", handleResize);

    return () => removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header
        isFilter={isFilter}
        setFilter={setFilter}
        isSort={isSort}
        setSort={setSort}
      />
      <section className={`py-10`}>
        <div className="container">
          <div className={`grid grid-cols-1 lg:grid-cols-[18rem_auto] gap-8`}>
            {isFilter ? <Sidebar /> : null}
            <Icons isSort={isSort} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
