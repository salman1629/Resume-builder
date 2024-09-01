import React, { useState } from "react";

function Select(props) {
    const {options,labelName,name,passEnteredValue} = props
    const [selectedValue,setSelectedValue]= useState()

    const onValueChange = (event)=>{
        setSelectedValue(event.target.value)
        passEnteredValue(event.target.value,name)
    }
  return (
    <div className="flex flex-col gap-2">
        <label htmlFor=""> {labelName} </label>
      <select value={selectedValue} onChange={onValueChange} className="border-2 rounded-xl p-1">
       {options.map(each=>{
        return <option key={each} value={each} >{each} </option>
       })}
      </select>
    </div>
  );
}

export default Select;
