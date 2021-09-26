import React from "react";
import "./ProgressBar.scss";

interface IProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<IProgressBarProps> = ({ progress = 0 }) => {
  const progressValue = `${progress}%`;
  return (
    <div className="progress-bar">
      <div className="progress-bar__heading">
        <div className="progress-bar__description">Заполнено</div>
        <div className="progress-bar__value">{progressValue}</div>
      </div>
      <div className="progress-bar__body">
        <div
          className="progress-bar__track"
          style={{ width: progressValue }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
