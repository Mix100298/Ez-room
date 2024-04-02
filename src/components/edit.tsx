"use client";
import React, { useState } from "react";

interface EditProps {
  onDelete?: () => void;
  onEdit?: () => void;
}

const Edit: React.FC<EditProps> = ({ onEdit, onDelete }: EditProps) => {
  const [edit, setEdit] = useState(false);
  // const [editEvent, setEditEvent] = useState(false);

  // const handleEditClick = () => {
  //   setEditEvent(!editEvent);
  //   if (onEdit) {
  //     onEdit();
  //   }
  // };

  return (
    <div className="gird">
      <button onClick={() => setEdit(!edit)}>
        <i className="fi fi-rr-menu-dots-vertical text-base"></i>
      </button>

      {edit && (
        <div className="absolute w-40 rounded-md bg-white shadow-lg z-40">
          <div className="py-0">
            <button
              className="w-full hover:bg-gray-200 border-b"
              onClick={() => {
                onEdit && onEdit();
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
              onClick={() => {
                onDelete && onDelete();
                setEdit(!edit);
              }}
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
