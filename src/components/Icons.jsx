import React, { useState } from "react";
import Filter from "./Filter.jsx";
import Icon from "./Icon.jsx";

const Icons = () => {
  const [displayIcons, setDisplayIcons] = useState([]);

  return (
    <>
      <Filter displayIcons={displayIcons} setDisplayIcons={setDisplayIcons} />
      <div>
        <div className={`mb-5`}>
          <h3 className={`font-bold text-lg`}>{displayIcons.length} Icons</h3>
        </div>
        <div className={`grid grid-cols-4 gap-4`}>
          {displayIcons.map((icon) => (
            <Icon key={icon.id} icon={icon} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Icons;
