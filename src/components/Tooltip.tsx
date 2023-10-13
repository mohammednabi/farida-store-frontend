import React, { FC, ReactNode } from "react";
interface props {
  children: ReactNode;
  tooltip?: string;
}

const Tooltip: FC<props> = ({ children, tooltip }) => {
  return (
    <div>
      {children}
      <span
        className="visible group-hover:visible  group-hover:opacity-100
       bg-blue-400 text-white p-1 rounded top-full mt-2 whitespace-nowrap"
      >
        {tooltip}
      </span>
    </div>
  );
};

export default Tooltip;
