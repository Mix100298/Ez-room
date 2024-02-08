import React from "react";

interface CheckboxProps {
  id: string;
  name: string;
  children?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  children,
  onChange,
}) => {
  return (
    <div>
      <div className="flex ">
        <input
          id={id}
          type="radio"
          name="default-radio"
          className="w-4 h-4 bg-gray-100 border-gray-300"
        />
        <label htmlFor={id} className="ms-2 text-sm font-medium text-gray-700">
          {name}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
