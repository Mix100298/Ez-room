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
        <svg
          className="fill-slate-500"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="m16.5 11.995c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25zm-6.75 0c0-1.242 1.008-2.25 2.25-2.25s2.25 1.008 2.25 2.25-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25z" />
        </svg>
      </button>
      {/* Dropdown edit */}
      {edit && (
        <div className="absolute w-40 rounded-md bg-white shadow-lg z-40">
          <div className="py-1">
            <button
              onClick={() => {
                handleEditClick();
                setEdit(!edit);
              }}
            >
              <div className="flex px-4 py-2 space-x-2 font-bold hover:text-blue-500 hover:fill-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="m4.988 19.012 5.41-5.41m2.366-6.424 4.058 4.058-2.03 5.41L5.3 20 4 18.701l3.355-9.494 5.41-2.029Zm4.626 4.625L12.197 6.61 14.807 4 20 9.194l-2.61 2.61Z" />
                </svg>
                <h1 className="">Edit</h1>
              </div>
            </button>
            <button onClick={() => setEdit(!edit)}>
              <div className="flex px-4 py-2  space-x-2 font-bold hover:text-red-500 hover:fill-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                </svg>
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
