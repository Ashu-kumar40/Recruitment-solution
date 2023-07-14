import React from "react";

const fixedClass =
  "py-2 flex px-3 rounded-br items-center  sm:text-xs font-medium text-sm leading-5 sm:leading-2 md:leading-3 w-full h-full text-black";

export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder="Type Here",
  inpClass,
}) {
  return (
    <div className="w-full">
      <label htmlFor={labelFor}>{labelText}</label>
      <input
        onChange={handleChange}
        value={value}
        type={type}
        name={name}
        id={id}
        required={isRequired}
        placeholder={placeholder}
        className={fixedClass}
      />
    </div>
  );
}
