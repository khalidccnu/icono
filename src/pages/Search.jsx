import React from "react";
import Header from "../components/Header.jsx";
import Icons from "../components/Icons.jsx";

const Search = () => {
  return (
    <>
      <Header />
      <section className={`py-10`}>
        <div className="container">
          <div>
            <Icons />
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
