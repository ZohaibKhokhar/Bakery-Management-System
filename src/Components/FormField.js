// src/components/FormField.js
import React from 'react';

const FormField = ({ label, id, name, value, onChange, required, type = "text", placeholder,theme }) => {
  const labelClass = `block mb-2 ${
    theme === 'light' ? 'text-gray-700' : 'text-white'
  }`;
  
  const inputClass = `w-full p-2 border  focus:outline-none focus:ring-2 ${
    theme === 'light'
      ? 'bg-white text-gray-700 border-gray-300 focus:ring-blue-500'
      : 'bg-gray-800 text-gray-200 border-gray-600 focus:ring-blue-400'
  }`;
  
  return (
    <div className="mb-4">
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={inputClass}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormField;
