import React from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Icons from "../components/Icons.jsx";

const Search = () => {
  return (
    <>
      <Header />
      <section className={`py-10`}>
        <div className="container">
          <div className={`grid grid-cols-[18rem_auto] gap-8`}>
            <Sidebar />
            <Icons />
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
