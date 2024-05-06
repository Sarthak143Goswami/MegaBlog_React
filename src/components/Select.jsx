import React, { useId } from 'react';

const Select = React.forwardRef(
  function Select(
    {
      options,
      label,
      className = '',
      ...props
    },
    ref
  ) {
    const id = useId(); // Corrected from useID to useId
    return (
      <div className="w-full">
        {label && <label htmlFor={id} className=""></label>}
        <select
          {...props}
          id={id}
          className={`px-3 py-2 rounded-lg bg-white text-black ouline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} // Corrected typo in className
        >
          {/* ?.  means optionally map  */}
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Select;
