import React from "react";
import rocketImg from "./rocket.svg";
import styles from "./Rocket.module.css";

const Rocket = ({ position }) => {
  return (
    <div className={styles.rocketWrapper} style={{ left: position.x, top: position.y }}>
      <img src={rocketImg} alt="rocket" className={styles.rocketImg} />
    </div>
  );
};

export default Rocket;
