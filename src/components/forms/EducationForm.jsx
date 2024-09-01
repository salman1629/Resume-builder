import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


import { storePersonalInfo } from "../../store/infoSlice";

import Select from "../ui/Select";
import DegreeForm from "./DegreeForm";
import Button from "../ui/Button";

function EducationForm() {
    const navigate = useNavigate()

  const dispatch = useDispatch();
  const [typeOfEducation, setTypeOfEducation] = useState('Degree');
  const onNextClicked = ()=>{
    navigate("/work_history")
  }
  const getFormsData = (value,key)=>{
    
    dispatch(storePersonalInfo({education:{...value,typeOfEducation}}))
  }
  const getEnteredValue = (value, key) => {
   
    setTypeOfEducation(value)
  };
  return (
    <div className="flex flex-col gap-10" >
      <Select
        name="selectEducation"
        labelName="Select Education"
        options={["Degree", "10th", "inter/12th"]}
        passEnteredValue={getEnteredValue}
      />

       <DegreeForm typeOfEducation={typeOfEducation} passEnteredValue={getFormsData} />
       <Button type='button' title="Next"  onButtonClicked={onNextClicked} />
    </div>
  );
}

export default EducationForm;
