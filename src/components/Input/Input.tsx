import React from "react";
import "./Input.scss";

interface IInputProps {
  description?: string;
  placeholder?: string;
  type: "text" | "password";
}

const Input = ({ description, placeholder, type }: IInputProps) => {
  return (
    <div className="input-default">
      {description && (
        <h3 className="input-default__description">{description}</h3>
      )}
      <input
        className="input-default__input"
        type={type}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Input;
