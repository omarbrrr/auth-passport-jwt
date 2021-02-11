import React from "react";

import Input from "./Input";
import Button from "../Button";
import Loader from "../Loader";

export default function Form({
  inputs,
  submitHandler,
  submitLabel,
  isLoading,
}) {
  const renderInput = ({ id, type, label, value, setValue, errors }) => {
    return (
      <Input
        key={id}
        id={id}
        type={type}
        label={label}
        value={value}
        setValue={setValue}
        err={errors}
        disabled={isLoading}
      />
    );
  };

  return (
    <form className="text-sm" onSubmit={submitHandler}>
      {inputs.map((input) => renderInput(input))}

      <Button type="submit" classNames="mt-4" disabled={isLoading}>
        {isLoading ? <Loader /> : submitLabel}
      </Button>
    </form>
  );
}
