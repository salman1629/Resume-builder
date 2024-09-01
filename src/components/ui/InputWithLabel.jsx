import { useState } from "react";

function InputWithLabel(props) {
  const inputWidht100 = ['jobTitle','companyName','skills','startDate','endDate', "schoolName","degree","field"]
  const [userInput, setUserInput] = useState();
  const { labelName, passEnteredValue, name, note,type } = props;

  const onFocusOut = () => {
    passEnteredValue(userInput, name);
  };
  const onInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div
      className="flex flex-col items-start gap-2 w-full"
      style={{ }}
    >
      <label className="" htmlFor="first_name">
        {labelName}
      </label>
      <input
        className="border-2 px-2 py-1 rounded-xl flex-1 w-full"
        // style={{ width: inputWidht100.includes(name) && "100%" }}
        onChange={onInputChange}
        onBlur={onFocusOut}
        id="first_name"
        type={type}
      />
      {note && <p className="text-gray-500">{note}</p>}
    </div>
  );
}

export default InputWithLabel;
