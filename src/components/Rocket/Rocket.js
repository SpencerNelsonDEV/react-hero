import React from "react";
import rocketImg from "./rocket.svg";
import landed from "./landed.svg";
import styles from "./Rocket.module.css";

const Rocket = ({ position, achievedGoal }) => {
  return (
    <div className={styles.rocketWrapper} style={{ left: position.x, top: position.y }}>
      {achievedGoal ? (
        <img src={landed} alt="landed" className={styles.rocketImg} />
      ) : (
        <img src={rocketImg} alt="rocket" className={styles.rocketImg} />
      )}
    </div>
  );
};

export default Rocket;
