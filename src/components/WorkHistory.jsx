import React from "react";

import { useSelector } from "react-redux";

function WorkHistory() {
  const workHistory = useSelector((state) => state.info.DATA.workHistory);
  const getStateAndEndDate = (workHistory) => {
    let startDate = workHistory?.startDate;
    let endDate = workHistory?.endDate;
    if (startDate) {
      let fullYear = new Date(startDate).getFullYear();
      let month = String(new Date(startDate).getMonth() + 1).padStart(2, "0");
      startDate = `${fullYear} - ${month}`;
    }
    if (endDate) {
      let fullYear = new Date(endDate).getFullYear();
      let month = String(new Date(endDate).getMonth() + 1).padStart(2, "0");
      endDate = `${fullYear} - ${month}`;
    }
    return { startDate, endDate };
  };
  const getJobResponsibilities = (workHistory) => {
    let responsibilities = workHistory.jobResponsibilities;
    if (responsibilities) {
      responsibilities = responsibilities.split(",");
      return responsibilities;
    } else {
      return [];
    }
  };
  // const { startDate, endDate } = getStateAndEndDate();
  // const jobResponsibilities = getJobResponsibilities();
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3 border-b-2 pb-1 ">
        <div style={{width:'25px',height:'25px'}} className="flex justify-center items-center bg-black rounded-full">
          <svg
          width={15}
          height={15}
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path
              fill="white"
              d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 160 0 8.2 0c32.3-39.1 81.1-64 135.8-64c5.4 0 10.7 .2 16 .7l0-32.7c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM320 352l-96 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l296.2 0C335.1 449.6 320 410.5 320 368c0-5.4 .2-10.7 .7-16l-.7 0zm320 16a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM496 288c8.8 0 16 7.2 16 16l0 48 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16z"
            />
          </svg>
        </div>

        <h1 className="font-semibold text-lg">Work History</h1>
      </div>

      {workHistory?.length &&
        workHistory.map((workHistory, index) => {
          return (
            <div key={index} className="flex w-full">
              <div className="w-1/3">
                <p>{getStateAndEndDate(workHistory)?.startDate}</p>
                <p>{getStateAndEndDate(workHistory)?.endDate}</p>
              </div>
              <div className="w-2/3">
                <h1>
                  {workHistory.jobTitle ? workHistory.jobTitle : "Job Title"}
                </h1>
                <p>
                  {workHistory.companyName
                    ? workHistory.companyName
                    : "Company name"}
                </p>
                <ul className="list-disc pl-7">
                  {getJobResponsibilities(workHistory)?.map((each, index) => {
                    return <li key={index}>{each}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default WorkHistory;
