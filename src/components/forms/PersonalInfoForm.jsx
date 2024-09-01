import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import InputWithLabel from "../ui/InputWithLabel";
import Button from "../ui/Button";

import { storePersonalInfo } from "../../store/infoSlice";

import { useNavigate } from "react-router-dom";

function PersonalInfoForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let userInputsRef = useRef({}).current;

  const onPersonalInfoFormSubmit = (event) => {
    event.preventDefault();
    console.log("entered values----------", userInputsRef);
    dispatch(storePersonalInfo({ personalInfo: userInputsRef }));
    navigate("/skills");
  };
  const getEnteredValue = (value, label) => {
    userInputsRef[label] = value;
  };

  return (
    <form
      onSubmit={onPersonalInfoFormSubmit}
      className="flex flex-col gap-10 w-full "
    >
      <div className="flex flex-col   w-full">
        <div className="flex flex-wrap justify-between gap-5">
          <div className="w-5/12">
            <InputWithLabel
              labelName="First Name"
              name="firstName"
              passEnteredValue={getEnteredValue}
              type="text"
            />
          </div>
          <div className="w-5/12">
            <InputWithLabel
              labelName="Last Name"
              name="lastName"
              passEnteredValue={getEnteredValue}
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-5">
          <div className="w-5/12">
            <InputWithLabel
              name="profession"
              labelName="Profession"
              passEnteredValue={getEnteredValue}
              type="text"
            />
          </div>
          <div className="w-5/12">
            <InputWithLabel
              name="address"
              labelName="Address"
              passEnteredValue={getEnteredValue}
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between ">
          <div className="w-5/12">
            <InputWithLabel
              name="phone"
              labelName="Phone"
              passEnteredValue={getEnteredValue}
              type="text"
            />
          </div>
          <div className="w-5/12">
            <InputWithLabel
              name="email"
              labelName="Email"
              passEnteredValue={getEnteredValue}
              type="email"
            />
          </div>
        </div>
      </div>
      <Button type="submit" title="Next" />
    </form>
  );
}

export default PersonalInfoForm;
