import React, { useEffect, useState } from "react";
import axios from "axios";
import Icon from "./Icon.jsx";

const Icons = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    axios.get(`/icons.json`).then((response) => setIcons(response.data));
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
