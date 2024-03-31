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
}: CheckboxProps) => {
  return (
    <div>
      <div className="flex ">
        <input
          id={id}
          aria-describedby={id}
          type="checkbox"
          className="bg-white border border-gray-300 text-gray-700"
        ></input>
        <div className="flex text-md ms-2">
          <label htmlFor={id} className=" text-gray-700 ">
            {name}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
