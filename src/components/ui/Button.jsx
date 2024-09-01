import React from "react";

function Button(props) {
  const { onButtonClicked, type, title } = props;

  return (
    <button
      onClick={type !== "submit" ? onButtonClicked : undefined}
      type={type}
      className=" bg-blue-400 text-white px-6 py-2 rounded-xl"
    >
      {title}
    </button>
  );
}

export default Button;
