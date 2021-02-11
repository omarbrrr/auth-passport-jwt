import React from "react";

export default function Button({
  type,
  classNames = "",
  clickHandler,
  disabled,
  children,
}) {
  const btnClassNames = `block mx-auto py-2 px-8 rounded-lg text-gray-100 bg-indigo-600 ${classNames}`;

  return (
    <button
      type={type}
      className={btnClassNames}
      onClick={clickHandler}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
