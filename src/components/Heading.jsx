import React from "react";

import { useSelector } from "react-redux";

function Heading() {
  const personalInfo = useSelector((state) => state.info.DATA.personalInfo);
  
  const getFirstAndLastName = () => {
    let f = personalInfo.firstName ? personalInfo.firstName : "First Name";
    let l = personalInfo.lastName ? personalInfo.lastName : "Last Name";
    return f + " " + l;
  };
  // const name = personalInfo.firstName + " " + personalInfo.lastName

  return (
    <div>
      <h1 className="text-5xl font-bold">{getFirstAndLastName()}</h1>
      <h3 className="text-2xl font-semibold">
        {personalInfo.profession ? personalInfo.profession : "Profession"}
      </h3>
    </div>
  );
}

export default Heading;
