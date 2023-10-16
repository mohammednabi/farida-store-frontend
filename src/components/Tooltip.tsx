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
        className="visible text-black border-solid border-black border
       p-1 rounded top-full mt-2 whitespace-nowrap"
      >
        {tooltip}
      </span>
    </div>
  );
};

export default Tooltip;
