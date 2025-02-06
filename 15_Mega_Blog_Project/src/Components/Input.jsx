import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}   `}
        // yahi woh chez hai jo parent component me input ke state ma access digi parent ko
        {...props}
        ref={ref}
        id={id}
      />
    </div>
  );
});

export default Input;

// for this see in the notes forwardref hooks
