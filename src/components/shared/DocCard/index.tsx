"use client";
import React, { useState } from "react";
import Arrow from "@/assets/images/components/doc-arrow.svg";
import Image from "next/image";

interface IDocCardProps {
  document?: string;
  description?: string;
}

export const DocCard: React.FC<IDocCardProps> = ({ document, description }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className="p-4 border rounded-lg border-black/20 drop-shadow-md bg-white/80 hover:bg-white cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <div className="text-h5">{document}</div>
        <Image
          src={Arrow}
          alt="arrow"
          className={`h-4 md:h-6 ${
            open && "rotate-90 "
          } transition-transform duration-300 ease-linear`}
        />
      </div>
      {open && (
        <div className="pt-3 text-p2 transition-transform duration-600">
          {description}
        </div>
      )}
    </div>
  );
};
