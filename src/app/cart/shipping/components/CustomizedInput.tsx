import React from "react";

interface formInputProps extends Partial<HTMLInputElement> {
  formHookRegister: any;

  label: string;
  labelPlacement?: "top" | "left";
  classNames?: {
    label?: string;
    inputContainer?: string;
  };
}

const CustomizedInput = ({
  formHookRegister,
  label,
  classNames,
  labelPlacement = "top",
  placeholder,
  required,
  type,
  inputMode,
}: formInputProps) => {
  return (
    <div
      className={`${labelPlacement === "top" && `grid grid-rows-2`} ${
        labelPlacement === "left" && `flex gap-2 items-center`
      }`}
    >
      {label && (
        <label className={`text-xl capitalize font-bold ${classNames?.label}`}>
          {label}
          {required && <span className="text-red-500 pl-1">*</span>}
        </label>
      )}
      <input
        {...formHookRegister}
        // type={inputType}

        type={type}
        inputMode={inputMode}
        placeholder={placeholder}
        required={required}
        className={`h-10 bg-mainGray border-none outline-none hover:bg-mainBlack/10 px-2 w-full ${classNames?.inputContainer}`}
      />
    </div>
  );
};

export default CustomizedInput;
