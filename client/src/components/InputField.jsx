import React from "react";

const InputField = ({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="input-container">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="input-field"
      />
    </div>
  );
};

export default InputField;
