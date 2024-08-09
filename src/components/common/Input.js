import React, { useState } from "react";
import PropTypes from "prop-types";
import { PiEyeDuotone, PiEyeSlashDuotone } from "react-icons/pi";

// Generic Input Component
const Input = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  isPassword,
  togglePasswordVisibility,
}) => {
  return (
    <div className="flex flex-col pt-4">
      <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
        <input
          type={type}
          name={name}
          className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {isPassword && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            onClick={togglePasswordVisibility}
          >
            {type !== "password" ? <PiEyeSlashDuotone /> : <PiEyeDuotone />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
