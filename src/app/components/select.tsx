import React from "react";

interface SelectProps {
  id: string;
  name: string;
  children?: string;
  options : string[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ id, name, children, options, onChange } : SelectProps) => {
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
        onChange={onChange}
      >
        {options.map((option,idx) =>{
          return <option key={idx} value={option}>{option}</option>
        }) }
      </select>
    </div>
  );
};

export default Select;
