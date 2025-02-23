import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface BaseWidgetProps {
  children: React.ReactNode;
  isOwner: boolean;
  isClickable: boolean;
  deleteWidget: () => void;
  editWidget: () => void;
}

export function BaseWidget({
  children,
  isOwner,
  isClickable,
  deleteWidget,
  editWidget,
}: BaseWidgetProps) {
  return (
    <div
      className={`h-full w-full border rounded-2xl shadow-md bg-surface duration-300 ease-in-out overflow-hidden group 
      ${isClickable ? "hover:scale-95 cursor-pointer" : ""}`}
    >
      {children}

      {isOwner && (
        <>
          <div
            onClick={deleteWidget}
            className="top-4 left-4 absolute bg-red-500 rounded-full h-8 w-8 flex justify-center items-center scale-75 opacity-0 ease-in-out duration-300 hover:cursor-pointer group-hover:opacity-100 group-hover:scale-100 hover:scale-110!"
          >
            <img
              src="/icons/close.svg"
              alt="Close icon"
              width={10}
              height={10}
            />
          </div>

          <div
            onClick={editWidget}
            className="top-4 right-4 absolute bg-black rounded-full h-8 w-8 flex justify-center items-center scale-75 opacity-0 ease-in-out duration-300 hover:cursor-pointer group-hover:opacity-100 group-hover:scale-100 hover:scale-110!"
          >
            <Image
              src="/icons/pencil-outline.svg"
              alt="Edit icon"
              height={18}
              width={18}
            />
          </div>
        </>
      )}
    </div>
  );
}
