import React from "react";
import styles from "./DataDisplay.module.css";

const DataDisplay = ({ data }) => {
  const { rocketPosition, cloudPosition, achievedGoal } = data;
  return (
    <div className={styles.dataWrapper}>
      <div className={styles.dataContainer}>
        <p className={styles.dataItem}>{`rocket position: x: ${rocketPosition.x} y: ${rocketPosition.y}`}</p>
        <p className={styles.dataItem}>{`cloud position: x: ${cloudPosition.x} y: ${cloudPosition.y}`}</p>
        <p className={styles.dataItem}>{`achieved goal:${achievedGoal}`}</p>
      </div>
    </div>
  );
};

export default DataDisplay;
