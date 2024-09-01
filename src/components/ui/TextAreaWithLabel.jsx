import React, { useState } from 'react'

function TextAreaWithLabel(props) {
    const {name,labelName, passEnteredValue} = props
    const [enteredInput,setEnteredInput] = useState()

    const onFocusOutOnTextArea = ()=>{
        passEnteredValue(enteredInput,name)
    }
    const handleChange = (event) => {
      console.log('event type=--------------',event.type)
        setEnteredInput(event.target.value)
    }
  return (
    <div className='flex flex-col gap-2' >
        <label htmlFor={name} > {labelName} </label>
        <textarea 
        className='border-2 rounded-xl p-2'
         id={name}
         rows="5"
         cols="33"
         onChange={handleChange}
        //  onPaste={handleChange}
         onBlur={onFocusOutOnTextArea}
         placeholder="Enter your what you did here..."
        />
    </div>
  )
}

export default TextAreaWithLabel