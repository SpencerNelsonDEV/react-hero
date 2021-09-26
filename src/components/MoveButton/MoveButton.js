import React from "react";
import styles from "./MoveButton.module.css";

const MoveButton = ({ direction }) => {
  return (
    <div>
      <button 
      className={`${styles.moveButton} ${styles[direction]}`}
      onClick={}
      >{direction}
      </button>
    </div>
  );
};

export default MoveButton;
