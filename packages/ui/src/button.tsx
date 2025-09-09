"use client";

import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

// TODO use this button in the apps when it is done
export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button className={className} onClick={() => alert(`todo`)}>
      {children}
    </button>
  );
};
