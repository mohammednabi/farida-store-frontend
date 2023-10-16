import React from "react";

const Cartdrop = () => {
  return (
    <div
      dir="rtl"
      className="absolute flex flex-col left-[100%] top-[100%] bg-slate-100 w-52 h-48"
    >
      <div className="mt-3 mb-3 mr-3">
        <h2 className="my-2 text-lg bold">
          عربة التسوق (0)
        </h2>
        <div className="block">
          <label className="block pb-4 text-lg text-gray-500 ">
            عربة التسوق فارغة حاليا
          </label>
          <a className="" href="https://evaleltorkey.com/">
            مواصلة التسوق
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cartdrop;
