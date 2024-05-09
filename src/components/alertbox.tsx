"use client";
import React, { useState, useEffect } from "react";

enum AlertType {
  Success = "success",
  Error = "error",
}

interface AlertBoxProps {
  message: string;
  type: AlertType;
}

const Alertbox: React.FC<AlertBoxProps> = ({
  message,
  type,
}: AlertBoxProps) => {
  return (
    <>
      {type === AlertType.Error && (
        <div
          className={`fixed top-20 right-0 mb-4 mr-4 p-4 bg-red-100 px-4 py-3 rounded-md`}
        >
          <div className="flex space-x-2">
            <i className="fi fi-sr-exclamation mt-0.5 text-red-500"></i>
            <p>{message}</p>
          </div>
        </div>
      )}
      {type === AlertType.Success && (
        <div
          className={`fixed top-20 right-0 mb-4 mr-4 p-4 bg-green-100 px-4 py-3 rounded-md`}
        >
          <div className="flex space-x-2">
            <i className="fi fi-sr-check-circle mt-0.5 text-green-500"></i>
            <p>{message}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Alertbox;
