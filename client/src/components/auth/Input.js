import React from "react";

import classnames from "classnames";

export default function Input({
  id,
  type,
  label,
  value,
  setValue,
  err,
  disabled,
}) {
  return (
    <div className="mb-2 text-xs">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error={err}
        className={classnames("w-full py-1 px-2 border rounded-md bg-gray-50", {
          invalid: err,
          }
        )}
        disabled={disabled}
        required
      />
      <span className="text-xs text-red-600">{err}</span>
    </div>
  );
}
