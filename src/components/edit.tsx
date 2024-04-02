"use client";
import React, { useState } from "react";

interface EditProps {
  onClick?: () => void;
  onEdit?: () => void;
}

const Edit: React.FC<EditProps> = ({ onEdit }: EditProps) => {
  const [edit, setEdit] = useState(false);
  const [editEvent, setEditEvent] = useState(false);

  const handleEditClick = () => {
    setEditEvent(!editEvent);
    if (onEdit) {
      onEdit();
    }
  };

  return (
    <div className="gird">
      <button onClick={() => setEdit(!edit)}>
        <i className="fi fi-rr-shopping-cart-add text-red-500 text-base"></i>
        {/* <svg
          className="fill-slate-500"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="m16.5 11.995c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25z" />
        </svg> */}
      </button>
      {/* Dropdown edit */}
      {edit && (
        <div className="absolute w-40 rounded-md bg-white shadow-lg z-40">
          <div className="py-0">
            <button
              className="w-full hover:bg-gray-200 border-b"
              onClick={() => {
                handleEditClick();
                setEdit(!edit);
              }}
            >
              <div className="flex px-4 py-2 space-x-2 font-bold text-blue-500">
                <i className="fi fi-rr-pen-nib  text-base"></i>
                <h1>Edit</h1>
              </div>
            </button>
            <button
              className="w-full hover:bg-gray-200"
              onClick={() => setEdit(!edit)}
            >
              <div className="flex px-4 py-2 space-x-2 font-bold text-red-500">
                <i className="fi fi-rr-trash  text-base"></i>
                <h1>Delete</h1>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Edit;
