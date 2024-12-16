import React from "react";
import { Dialog } from "primereact/dialog";

interface IModalProps {
  isOpen: any;
  setISOpen: any;
  title?: any;
  children: any;
  background?: any;
}

export const Modal: React.FC<IModalProps> = ({
  isOpen,
  setISOpen,
  title,
  children,
  background,
}) => {
  return (
    <div>
      <Dialog
        visible={isOpen}
        onHide={() => setISOpen(false)}
        breakpoints={{ "960px": "75vw", "640px": "100vw" }}
        className={background ? background : "bg-white"}
      >
        {children}
      </Dialog>
    </div>
  );
};


