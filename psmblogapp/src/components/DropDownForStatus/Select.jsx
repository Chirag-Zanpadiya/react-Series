import React, { forwardRef, useId } from "react";

function Select({ label, className = " ", options, ...props }, ref) {
  const id = useId();
  return (
    <>
      <div className="max-w-md ">
        {label && (
          <label
            htmlFor={id}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
        )}

        {/* ye basically drop down hai to select the active ans disactive status of the post */}

        <select
          {...props}
          ref={ref}
          id={id}
          className={`${className} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
        >
          {/* yaha pe ham jobhi use ne option diye hai uske upper map lagayege */}
          {/*options?.map matbal hai ki map me kuch value ho to uske upper iterate karo  */}
          {options?.map((option) => (
            <option  value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default React.forwardRef(Select);
