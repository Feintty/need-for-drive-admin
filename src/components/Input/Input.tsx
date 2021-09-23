import classNames from "classnames";
import React from "react";
import "./Input.scss";

interface IInputProps {
  description?: string;
  placeholder?: string;
  type: "text" | "password";
  setter?: (arg0: string) => void;
  isCorrect: boolean;
  value?: string;
}

const Input: React.FC<IInputProps> = ({
  description,
  placeholder,
  type,
  setter,
  isCorrect,
  value = "",
}) => {
  const inputClass = classNames("input-default__input", {
    incorrect: !isCorrect,
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setter) {
      setter(e.target.value);
    }
  };

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
        className={inputClass}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
        value={value && value}
      />
    </div>
  );
};

export default Input;
