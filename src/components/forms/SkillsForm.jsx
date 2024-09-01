import React, { useRef } from "react";
import InputWithLabel from "../ui/InputWithLabel";
import Button from "../ui/Button";

import { useNavigate } from "react-router-dom";

import { storePersonalInfo } from "../../store/infoSlice";
import { useDispatch } from "react-redux";

function SkillsForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let userInputRef = useRef().current;

  const onSkillsFormSubmit = (event) => {
    event.preventDefault();
    dispatch(storePersonalInfo({ skills: userInputRef }));
    console.log("checking skills after next clicked----", userInputRef);
    navigate("/education");
  };
  const getEnteredValue = (value) => {
    userInputRef = value;
  };

  return (
    <form
      onSubmit={onSkillsFormSubmit}
      className="flex flex-col gap-10  w-full"
    >
      <InputWithLabel
        note="Please Enter Comma Separated Skills"
        name="skills"
        passEnteredValue={getEnteredValue}
        labelName="Skills"
      />
      <Button type="submit" title="Next" />
    </form>
  );
}

export default SkillsForm;
