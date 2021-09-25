import React from "react";
import MoveButton from "../MoveButton/MoveButton";
import styles from "./RocketControls.module.css";

const RocketControls = () => {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.row}>
        <MoveButton />
      </div>
      <div className={styles.row}>
        <MoveButton />
        <MoveButton />
      </div>
      <div className={styles.row}>
        <MoveButton />
      </div>
    </div>
  );
};

export default RocketControls;
