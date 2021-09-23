import React from "react";
import rocketImg from "./rocket.svg";
import styles from "./Rocket.module.css";

const Rocket = () => {
  return (
    <div className={styles.rocketWrapper}>
      <img src={rocketImg} alt="rocket" className={styles.rocketImg} />
    </div>
  );
};

export default Rocket;
