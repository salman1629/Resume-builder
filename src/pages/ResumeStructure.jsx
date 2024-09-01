import React, { useRef } from "react";

import Heading from "../components/Heading";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import WorkHistory from "../components/WorkHistory";
import Summary from "../components/Summary";
import Education from "../components/Education";

function ResumeStructure() {
  return (
    <div id={'print_content_ref'} className="flex flex-col gap-5" >
      <Heading />
      <Summary/>
      <div className="flex gap-5">
        <div className="w-1/3 flex flex-col" >
          <Contact />
          <Skills />
        </div>

        <div className="w-2/3" >
          <WorkHistory />
          <Education/>
        </div>
      </div>
    </div>
  );
}

export default ResumeStructure;
