import classNames from "classnames";
import React from "react";
import { useDispatch } from "react-redux";
import "./Input.scss";

interface IInputProps {
  description?: string;
  placeholder?: string;
  type: "text" | "password";
  setter?: (arg0: string) => void;
  isCorrect: boolean;
}

const Input: React.FC<IInputProps> = ({
  description,
  placeholder,
  type,
  setter,
  isCorrect,
}) => {
  const dispatch = useDispatch();
  const inputClass = classNames("input-default__input", {
    incorrect: !isCorrect,
  });

  const handleSetValueOnChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (setter) {
      dispatch(setter(e.target.value));
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
        onChange={handleSetValueOnChangeInput}
      />
    </div>
  );
};

export default Input;
