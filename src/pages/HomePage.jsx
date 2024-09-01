import React, { useState } from "react";
import PersonalInfoForm from "../components/forms/PersonalInfoForm";
import Heading from "../components/Heading";
import Contact from "../components/Contact";
import WorkHistory from "../components/WorkHistory";
import SkillsForm from "../components/forms/SkillsForm";
import Skills from "../components/Skills"
import WorkHistoryForm from "../components/forms/WorkHistoryForm";
function HomePage() {
  const [whichFormNeedToShow,setWhichFormNeedToShow] = useState(1)


  const handleForms = ()=>{

   
  }
  return (
    <div className="flex flex-wrap h-screen">
      <div className="w-1/2 p-5 flex flex-col items-start gap-2">
        {whichFormNeedToShow===1 &&<PersonalInfoForm formSubmitted={handleForms} nextForm="skills"/>}
        {whichFormNeedToShow ===2 && <SkillsForm formSubmitted={handleForms} nextForm="workHistory"  />}
        {whichFormNeedToShow===3 && <WorkHistoryForm formSubmitted={handleForms}  />}
      </div>
      <div className="w-1/2 p-5">
        <Heading />
        <Contact/>
        <Skills/>
        <WorkHistory/>
      </div>
    </div>
  );
}

export default HomePage;

/**
 * need to get the data from the personalInfo form and pass that to
 * Heading and contact component
 * need to make contact template */
