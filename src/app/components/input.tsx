import React from "react"

interface InputProps {
  id: string
  name: string
  type: string
  placeholder: string
  children?: string
  onChange?: () => void
  required?: boolean
  value?: string
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
        type={type}
        name={id}
        id={id}
        className="bg-white border border-gray-300 text-gray-700 sm:text-sm rounded w-full p-2.5"
        placeholder={placeholder}
        autoComplete="off"
        onChange={onChange}
        required={required}
        value={value}
      ></input>
    </div>
  )
}

export default Input
