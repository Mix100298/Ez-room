import React from "react";

interface CheckboxProps {
  id: string;
  name: string;
  children: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, name, children }) => {
  return (
    <div>
      <div className="flex items-center">
        <input
          id={id}
          aria-describedby={id}
          type="checkbox"
          className="bg-white border border-gray-300 text-gray-700 sm:text-sm p-2.5"
        ></input>
        <div className="flex text-sm ml-3">
          <label htmlFor={id} className=" text-gray-700 ">
            {name}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
