import React, { useState } from "react";
import "./Styles.css";

const CreateTimer = ({ createTimer }) => {
  const [sec, setSec] = useState("");

  const addTimer = () => {
    createTimer(sec);
  };

  return (
    <div className="inputContainer">
      <label htmlFor="#timer">New Timer</label>
      <input
        type="number"
        id="timer"
        onChange={(e) => setSec(e.target.value)}
      />
      <button className="btn" onClick={addTimer}>
        Add
      </button>
    </div>
  );
};

export default CreateTimer;
