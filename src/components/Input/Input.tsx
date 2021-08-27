import React from "react";
import "./Input.scss";

interface IInputProps {
  description?: string;
  placeholder?: string;
  type: "text" | "password";
}

const Input: React.FC<IInputProps> = ({ description, placeholder, type }) => {
  return (
    <div className="input-default">
      {description && (
        <label
          htmlFor={`input-${description}`}
          className="input-default__description"
        >
          {description}
        </label>
      )}
      <input
        id={`input-${description}`}
        className="input-default__input"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
