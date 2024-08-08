import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col mx-auto max-w-[1200px] overflow-auto">
      {children}
    </div>
  );
};

export default DefaultLayout;
