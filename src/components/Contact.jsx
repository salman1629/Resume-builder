import React from "react";

import { useSelector } from "react-redux";

function Contact() {
  const personalInfo = useSelector((state) => state.info.DATA.personalInfo);
  const requiredFields = ["Address", "Phone", "Email"];

  const getData = () => {};
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3 border-b-2 pb-1 ">
        <div
          style={{ width: "25px", height: "25px" }}
          className="flex items-center justify-center bg-black rounded-full iconStyles"
        >
          <svg
            width={14}
            height={14}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="white"
              d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
            />
          </svg>
        </div>
        <div>
          <h1 className="font-semibold text-lg">Contact</h1>
        </div>
      </div>
      <div className="p-2 flex flex-col gap-1">
        {requiredFields.map((each, index) => {
          return (
            <div key={index}>
              <h1 className="font-semibold">{each}</h1>
              <p className="text-gray-500">
                {personalInfo
                  ? personalInfo[each.toLocaleLowerCase()]
                  : each.toLowerCase()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Contact;
