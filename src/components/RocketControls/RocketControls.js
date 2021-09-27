import React from "react";
import MoveButton from "../MoveButton/MoveButton";
import styles from "./RocketControls.module.css";

const RocketControls = ({ updateParent }) => {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.row}>
        <MoveButton direction={"up"} updateParentParent={updateParent} />
      </div>
      <div className={styles.row}>
        <MoveButton direction={"left"} updateParentParent={updateParent} />
        <MoveButton direction={"right"} updateParentParent={updateParent} />
      </div>
      <div className={styles.row}>
        <MoveButton direction={"down"} updateParentParent={updateParent} />
      </div>
    </div>
  );
};

export default RocketControls;
