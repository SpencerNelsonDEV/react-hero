import React from "react";
import MoveButton from "../MoveButton/MoveButton";
import styles from "./RocketControls.module.css";

const RocketControls = () => {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.row}>
        <MoveButton direction={"up"} />
      </div>
      <div className={styles.row}>
        <MoveButton direction={"left"} />
        <MoveButton direction={"right"} />
      </div>
      <div className={styles.row}>
        <MoveButton direction={"down"} />
      </div>
    </div>
  );
};

export default RocketControls;
