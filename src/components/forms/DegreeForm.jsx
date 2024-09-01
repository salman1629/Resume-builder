import React, { useRef } from "react";

import InputWithLabel from "../ui/InputWithLabel";
import Button from "../ui/Button";

function DegreeForm(props) {
  const { typeOfEducation, passEnteredValue } = props;
  const userInputRef = useRef({}).current;
  const educationFormRef = useRef()

  const onDegreeFormSubmitted = (event) => {
    event.preventDefault();
    passEnteredValue(userInputRef,typeOfEducation);
    educationFormRef.current.reset()

  };
  const getEnteredValue = (value, key) => {
    userInputRef[key] = value;
  };

  return (
    <form ref={educationFormRef} onSubmit={onDegreeFormSubmitted} className="flex flex-col gap-5">
      <div className=" flex gap-5">
        <InputWithLabel
          name="startDate"
          passEnteredValue={getEnteredValue}
          labelName="Start Date"
          type="date"
        />
        <InputWithLabel
          name="endDate"
          passEnteredValue={getEnteredValue}
          labelName="End Date"
          type="date"
        />
      </div>

      <InputWithLabel
        name="schoolName"
        passEnteredValue={getEnteredValue}
        labelName="School Name"
        type="text"
      />
      {typeOfEducation !== "10th" && (
        <div className="flex gap-5">
          <InputWithLabel
            name="degree"
            passEnteredValue={getEnteredValue}
            labelName="Degree"
            type="text"
          />
          <InputWithLabel
            name="field"
            passEnteredValue={getEnteredValue}
            labelName="Field of Study"
            type="text"
          />
        </div>
      )}
      <Button title="Save"type="submit" />
    </form>
  );
}

export default DegreeForm;
