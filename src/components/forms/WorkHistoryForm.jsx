import React, { useRef, } from "react";
import { useDispatch } from "react-redux";

import InputWithLabel from "../ui/InputWithLabel";
import TextAreaWithLabel from "../ui/TextAreaWithLabel";

import { storePersonalInfo } from "../../store/infoSlice";

function WorkHistoryForm(props) {
  const dispatch = useDispatch()
  let userInputRef = useRef({}).current;
  const formRef = useRef()
  const getEnteredValue = (value, key) => {
    userInputRef[key] = value;
  };
  const onSaveClicked = () => {
    dispatch(storePersonalInfo({workHistory:userInputRef}))
    userInputRef = {};
    formRef.current.reset()
  };
  return (
    <div className="w-full flex flex-col gap-5">
      <form ref={formRef} >
        <div className="w-full flex flex-col gap-5">
          <h1 className="font-semibold text-xl">Enter Work History</h1>
          <div className="w-full flex justify-between">
            <button type="reset" className="border-r-4 px-2  border-blue-500">
              Add one more work history
            </button>
            <button
              type="button"
              onClick={onSaveClicked}
              className="border-r-4 px-2  border-blue-500"
            >
              Save
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3" >
        <div className="w-full flex justify-between mt-5 gap-5">
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
            name="jobTitle"
            passEnteredValue={getEnteredValue}
            labelName="Job Title"
            type="text"
          />
          <InputWithLabel
            name="companyName"
            passEnteredValue={getEnteredValue}
            labelName="Company Name"
            type="text"
          />
          <TextAreaWithLabel
            name="jobResponsibilities"
            labelName="Let's describe what you did"
            passEnteredValue={getEnteredValue}
          />
        </div>
      </form>
    </div>
  );
}

export default WorkHistoryForm;
