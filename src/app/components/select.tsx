import React from "react";

interface SelectProps {
  id: string;
  name: string;
  children: string;
}

const Select: React.FC<SelectProps> = ({ id, name, children }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        {name}
      </label>
      <select
        id={id}
        className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded p-2.5 w-full"
      >
        <option>{children}</option>
        <option>01</option>
        <option>02</option>
      </select>
    </div>
  );
};

export default Select;
