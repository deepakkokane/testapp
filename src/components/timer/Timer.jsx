import React from "react";
import "./Styles.css";
const Timer = ({ item, removeTimer }) => {
  const milliseconds = item.seconds * 1000;
  return (
    <div>
      <div className="timer">
        <b>
          {(milliseconds / 1000).toFixed(0)} ,{" "}
          {((milliseconds % item.seconds) * 10).toFixed(0)}
        </b>
        <span>{item?.created}</span>

        <span className="icon" onClick={() => removeTimer(item?.id)}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default Timer;
