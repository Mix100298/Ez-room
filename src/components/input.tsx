import React from "react";

interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  children?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  value?: string | number | boolean;
  form?: any;
  isdisabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  type,
  placeholder,
  children,
  onChange,
  required = false,
  value,
  form,
  isdisabled,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        {name}
      </label>
      <input
        {...form}
        type={type}
        name={id}
        id={id}
        className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
        placeholder={placeholder}
        autoComplete="off"
        onChange={onChange}
        required={required}
        value={value}
        disabled={isdisabled}
      ></input>
    </div>
  );
};

export default Input;
